import { Controller, Get } from "@nestjs/common";
import { OrganizationService } from "./organization.service";

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organization_service: OrganizationService ){}

    @Get()
    getOrganizations() : number {
        return this.organization_service.getOrganization();
    }
}