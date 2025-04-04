"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/register.schema";
import {
  createUser,
  getUserByEmail,
} from "@/server/controllers/user.controller";
import { generateVerificationToken } from "@/server/tokens";
import { sendVerficationEmail } from "@/server/services/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields !" };
  }

  // Get user data
  const { name, email, password } = validatedFields.data;

  // Check if user already exists
  const existingUser = await getUserByEmail(email);

  // If user already exists, return error
  if (existingUser) {
    return { error: "User already exists !" };
  }

  // Create user
  try {
    await createUser({ name, email, password });

    const verificationToken = await generateVerificationToken(email);

    // Send verification email
    await sendVerficationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Confirmation email sent !" };
  } catch {
    return { error: "Error creating user !" };
  }
};
