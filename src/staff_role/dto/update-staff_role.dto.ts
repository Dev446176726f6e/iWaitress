import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffRoleDto } from './create-staff_role.dto';

export class UpdateStaffRoleDto extends PartialType(CreateStaffRoleDto) {}
