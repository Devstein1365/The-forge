import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Role } from '@prisma/client';
import { CreateRoleDto } from './dto/create-role.dto';
import { SystemMessages } from '../../common/constants/system-messages';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const name = createRoleDto.name.trim();
    const existingRole = await this.prisma.role.findFirst({
      where: { name },
    });
    if (existingRole) {
      throw new ConflictException(SystemMessages.ROLE.EXIST);
    }
    const description = createRoleDto.description.trim();
    const data = { name, description };
    const newRole = await this.prisma.role.create({
      data,
    });

    return newRole;
  }

  async getRole(roleNames: string | string[]): Promise<Role[]> {
    const rolesArray = Array.isArray(roleNames) ? roleNames : [roleNames];

    const roles = await this.prisma.role.findMany({
      where: { name: { in: rolesArray } },
    });
    if (roles.length !== rolesArray.length) {
      throw new NotFoundException(SystemMessages.ROLE.NOT_FOUND);
    }

    return roles;
  }

  async getAllRoles(): Promise<Role[]> {
    return await this.prisma.role.findMany();
  }

  async updateRole(id: string, updateRoleDto: CreateRoleDto): Promise<Role> {
    const { name, description } = updateRoleDto;
    const existingRole = await this.prisma.role.findFirst({
      where: { id },
    });
    if (!existingRole) {
      throw new NotFoundException(SystemMessages.ROLE.NOT_FOUND);
    }
    const data = { name, description };
    const updatedRole = await this.prisma.role.update({
      where: { id },
      data,
    });

    return updatedRole;
  }
}
