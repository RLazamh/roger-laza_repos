import { Controller, Get, Post } from "@nestjs/common";
import { CreateOrganizationDto } from "../dtos/create.organization.dto";
import { Organization } from "../entities";
import { OrganizationService } from "./organization.service";

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organization_service: OrganizationService ){}

    @Post()
    getOrganizations() : Promise<Organization> {
        const createPostDto = new CreateOrganizationDto()
        createPostDto.name = 'Roger Laza';
        createPostDto.status = 1;
        createPostDto.created_at = new Date();
        return this.organization_service.create(createPostDto);
    }
}