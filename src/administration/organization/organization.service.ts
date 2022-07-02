import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Organization } from "../entities";


@Injectable()
export class OrganizationService{
    constructor(
        @Inject('ORGANIZATION_REPOSITORY')
        private readonly organization_repositoy : Repository<Organization>
    ){}

    async findAll(): Promise<Organization[]> {
        return this.organization_repositoy.find();
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