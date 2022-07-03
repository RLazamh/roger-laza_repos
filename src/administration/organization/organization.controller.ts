import { Controller, Get, Post } from "@nestjs/common";
import { CreateOrganizationDto } from "../dtos/create.organization.dto";
import { OrganizationService } from "./organization.service";
import { Organization } from "../entities";

@Controller('organization')
export class OrganizationController {
    constructor(private readonly _organization_service: OrganizationService ){}

    @Post()
    createOrganization() : Promise<Organization> {
        const create_organization_dto = new CreateOrganizationDto()
        create_organization_dto.name = 'Roger Laza';
        create_organization_dto.status = 1;
        create_organization_dto.created_at = new Date();
        return this._organization_service.create(create_organization_dto);
    }
}