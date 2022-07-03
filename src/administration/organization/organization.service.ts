import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateOrganizationDto } from "../dtos/create.organization.dto";
import { EditOrganizationDto } from "../dtos/edit.organization.dto";
import { Organization } from "../entities";

export interface OrganizationFindOne {
    id?: number;
    status?: number;
  }

@Injectable()
export class OrganizationService {
    constructor(
        @Inject('ORGANIZATION_REPOSITORY')
        private readonly _organization_repositoy : Repository<Organization>
    ){}

    async create(create_organization_dto: CreateOrganizationDto): Promise<Organization> {
        const new_organization = await this._organization_repositoy.save({
          name: create_organization_dto.name,
          status: create_organization_dto.status,
          created_at: create_organization_dto.created_at,
        });
        return new_organization;
    }

    async getAll(): Promise<Organization[]> {
        return this._organization_repositoy.find();
    }

    async getOne(id: number, organization_entity?: Organization) {
        const organization = await this._organization_repositoy
          .findOne({where : { id : id } })
          .then(o => (!organization_entity ? o : !! o && organization_entity.id === o.id ? o : null));
    
        if (!organization)
          throw new NotFoundException('Organization does not exists');
    
        return organization;
    }

    async editOne(id: number, dto: EditOrganizationDto, organization_entiy?: Organization) {
        console.log(dto);
        const organization = await this.getOne(id, organization_entiy);
        const editedOrganization = Object.assign(organization, dto);
        return await this._organization_repositoy.save(editedOrganization);
    }

    async findOne(data: OrganizationFindOne) {
        return await this._organization_repositoy
          .createQueryBuilder('organization')
          .where(data)
          .getOne();
    }

    async deleteOne(id: number, organization_entiy?: Organization) {
        const organization = await this.getOne(id, organization_entiy);
        return await this._organization_repositoy.remove(organization);
    }

    getOrganization() : number {
        return 200;
    }
}