"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas/reset.schema";
import { getUserByEmail } from "@/server/controllers/user.controller";
import { generatePasswordResetToken } from "@/server/tokens";
import { sendPasswordResetEmail } from "@/server/services/mail";
import { userHasAccount } from "@/server/controllers/account.controller";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email !" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email) {
    return { error: "Email not found !" };
  }

  if (await userHasAccount(existingUser.id)) {
    return { error: "Cannot reset password for OAuth users !" };
  }

  // Generate reset token
  const passwordResetToken = await generatePasswordResetToken(email);

  // Send reset email
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent !" };
};
