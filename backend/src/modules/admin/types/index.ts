import { Permission, User } from '@prisma/client';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface IUser extends User {
  roles: Role[];
}
