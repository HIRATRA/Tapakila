"use server";

import { currentUser } from "@/lib/auth";
import { SettingsSchema } from "@/schemas/settings.schema";
import {
  getUserByEmail,
  getUserById,
} from "@/server/controllers/user.controller";
import { db } from "@/lib/db";
import { sendVerficationEmail } from "@/server/services/mail";
import { generateVerificationToken } from "@/server/tokens";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const validatedFields = SettingsSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields !" };
  }

  // Get current user
  const user = await currentUser();

  // Check if user exists
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  // Check if email already exists
  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== dbUser.id) {
      return { error: "Email already in use !" };
    }

    // Generate verification token
    const verificationToken = await generateVerificationToken(values.email);

    // Send verification email
    await sendVerficationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent !" };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );

    if (!passwordsMatch) {
      return { error: "Invalid password !" };
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(values.newPassword, 10);

    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  // Update user
  try {
    await db.user.update({
      where: { id: dbUser.id },
      data: { ...values },
    });

    return { success: "Profile updated !" };
  } catch {
    return { error: "Error updating profile !" };
  }
};
