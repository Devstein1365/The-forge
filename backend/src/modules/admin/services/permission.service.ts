import { ConflictException, Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async createPermission(
    name: string,
    description: string,
  ): Promise<Permission> {
    if (!name || !description) {
      throw new Error('Name and description are required');
    }
    return await this.prisma.permission
      .create({
        data: {
          name,
          description,
        },
      })
      .catch((error) => {
        if (error.code === 'P2002') {
          throw new ConflictException('Permission already exists');
        }
        throw error;
      });
  }

  async getPermissions(): Promise<Permission[]> {
    return await this.prisma.permission.findMany();
  }

  async getPermissionById(id: string): Promise<Permission | null> {
    if (!id) {
      throw new Error('Permission id is required');
    }
    return await this.prisma.permission.findUnique({
      where: { id },
    });
  }

  async updatePermission(id: string, name: string): Promise<Permission> {
    if (!id || !name) {
      throw new Error('Permission id and name are required');
    }
    return await this.prisma.permission.update({
      where: { id },
      data: { name },
    });
  }

  async deletePermission(id: string): Promise<Permission> {
    if (!id) {
      throw new Error('Permission id is required');
    }
    return await this.prisma.permission.delete({
      where: { id },
    });
  }

  async assignPermissionToRole(
    roleId: string,
    permissionId: string,
  ): Promise<void> {
    if (!roleId || !permissionId) {
      throw new Error('Role id and permission id are required');
    }
    await this.prisma.role.update({
      where: { id: roleId },
      data: {
        permissions: {
          connect: { id: permissionId },
        },
      },
    });
  }

  async removePermissionFromRole(
    roleId: string,
    permissionId: string,
  ): Promise<void> {
    if (!roleId || !permissionId) {
      throw new Error('Role id and permission id are required');
    }
    await this.prisma.role.update({
      where: { id: roleId },
      data: {
        permissions: {
          disconnect: { id: permissionId },
        },
      },
    });
  }
}
