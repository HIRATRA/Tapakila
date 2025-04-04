import { db } from "@/lib/db";
import { user } from "@/utils/types";
import bcrypt from "bcryptjs";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const createUser = async ({ name, email, password }: user) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
      },
    });
  } catch {
    return null;
  }
};
