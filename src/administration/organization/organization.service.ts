import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateOrganizationDto } from "../dtos/create.organization.dto";
import { Organization } from "../entities";


@Injectable()
export class OrganizationService{
    constructor(
        @Inject('ORGANIZATION_REPOSITORY')
        private readonly _organization_repositoy : Repository<Organization>
    ){}

    async create(create_organization_dto: CreateOrganizationDto): Promise<Organization> {
        const newPost = await this._organization_repositoy.save({
          name: create_organization_dto.name,
          status: create_organization_dto.status,
          created_at: create_organization_dto.created_at,
        });
        return newPost;
    }

    async findAll(): Promise<Organization[]> {
        return this._organization_repositoy.find();
    }

    getOrganization() : number {
        return 200;
    }
}