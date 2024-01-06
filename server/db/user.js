import { prisma } from ".";
import bcrypt from "bcrypt";

export const createUser = (userData) => {
  const finalData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 20),
  };

  return prisma.user.create({
    data: finalData,
  });
};
