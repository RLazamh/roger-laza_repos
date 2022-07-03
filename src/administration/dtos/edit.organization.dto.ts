import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationDto } from './create.organization.dto';

export class EditOrganizationDto extends PartialType(CreateOrganizationDto) {}