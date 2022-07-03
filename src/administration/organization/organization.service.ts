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

    async create(createPostDto: CreateOrganizationDto): Promise<Organization> {
        const newPost = await this._organization_repositoy.save({
          name: createPostDto.name,
          status: createPostDto.status,
          created_at: createPostDto.created_at,
        });
        return newPost;
    }

    async findAll(): Promise<Organization[]> {
        return this._organization_repositoy.find();
    }

    getOrganization() : number {
        return 200;
        // const accountRepository = AppDataSource.getRepository(Organization);
        // const organization = new Organization();
        // organization.name ='Roger Laza';
        // organization.status = 2;
        // accountRepository.save(organization);
        // console.log("Saved a new account.");
        // return organization.id;
    }
}