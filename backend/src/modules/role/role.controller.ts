import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { SystemMessages } from '../../common/constants/system-messages';

import { RolesGuard } from '../auth/guard/roles.guard';
import { ValidateParamsID } from 'src/common/dto/validate-id-params.dto';
import { PermissionsGuard } from '../admin/guard/permission.guard';
import { Permissions } from '../admin/decorator/permission.decorator';

@Controller('roles')
@UseGuards(RolesGuard, PermissionsGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Permissions('CREATE_ROLE')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @Get()
  async getRoles() {
    const roles = await this.roleService.getAllRoles();
    return { message: SystemMessages.ROLE.RETRIEVE_SUCCESS, data: roles };
  }

  @Patch(':id')
  @Permissions('UPDATE_ROLE')
  async updateRole(
    @Param() { id }: ValidateParamsID,
    @Body() updateRoleDto: CreateRoleDto,
  ) {
    const updatedRole = await this.roleService.updateRole(id, updateRoleDto);
    return {
      message: SystemMessages.ROLE.UPDATE_SUCCESS,
      data: updatedRole,
    };
  }
}
