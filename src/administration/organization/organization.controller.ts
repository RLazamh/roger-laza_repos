import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateOrganizationDto } from "../dtos/create.organization.dto";
import { OrganizationService } from "./organization.service";
import { Organization } from "../entities";
import { EditOrganizationDto } from "../dtos/edit.organization.dto";

@Controller('organization')
export class OrganizationController {
    constructor(private readonly _organization_service: OrganizationService ){}

    @Get()
    async getMany() {
        const data = await this._organization_service.getAll();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
      const data = await this._organization_service.getOne(id);
      return { data };
    }

    @Post()
    createOrganization() : Promise<Organization> {
        const create_organization_dto = new CreateOrganizationDto()
        create_organization_dto.name = 'Roger Laza';
        create_organization_dto.status = 1;
        create_organization_dto.created_at = new Date();
        return this._organization_service.create(create_organization_dto);
    }

    @Put(':id')
    async editOne(
        @Param('id') id: number,
        @Body() dto: EditOrganizationDto,
    ) {
        const data = await this._organization_service.editOne(id, dto);
        return { message: 'Organization edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this._organization_service.deleteOne(id);
        return { message: 'Organization deleted', data };
    }
}