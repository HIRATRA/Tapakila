"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas/login.schema";
import { getUserByEmail } from "@/server/controllers/user.controller";
import { db } from "@/lib/db";
import {
  sendTwoFactorTokenEmail,
  sendVerficationEmail,
} from "@/server/services/mail";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/server/tokens";
import { getTwoFactorTokenByEmail } from "@/server/tokens/two-factor-token";
import { getTwoFactorConfirmationByUserId } from "@/server/services/two-factor-confirmation";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields !" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials !" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    // Send verification email
    await sendVerficationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent !" };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { error: "Invalid code !" };
      }

      if (twoFactorToken.token !== code) {
        return { error: "Invalid code !" };
      }

      const hasEpired = new Date(twoFactorToken.expires) < new Date();

      if (hasEpired) {
        return { error: "Code has expired !" };
      }

      await db.twoFactorToken.delete({ where: { id: twoFactorToken.id } });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials !" };
        default:
          return { error: "Something went wrong !" };
      }
    }

    throw error;
  }
};
