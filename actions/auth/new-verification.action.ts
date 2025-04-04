"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/server/controllers/user.controller";
import { getVerificationTokenByToken } from "@/server/tokens/verification-token";

export const newVerification = async (token: string) => {
  // Retrieve the verification token from the database
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Token does not exist !",
    };
  }

  // Check if the token has expired
  const hasExpired = new Date() > new Date(existingToken.expires);

  if (hasExpired) {
    return {
      error: "Token has expired !",
    };
  }

  // Check if user exists
  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      error: "User does not exist !",
    };
  }

  // Update the user's email verification status and email
  // if the verification token exists and is valid
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  // Delete the verification token from the database once it has been used
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return {
    success: "Email verified !",
  };
};
