import { Prisma } from '@prisma/client';

export const userSelectFields: Prisma.UserSelectScalar = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  profilePic: true,
};
