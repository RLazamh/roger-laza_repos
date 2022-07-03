import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateRepositoryDto } from "../dtos/create.repository.dto";
import { RepositoryEntity } from "../entities";

@Injectable()
export class RepositoryService{
    constructor(
        @Inject('REPOSITORY_ENTITY_REPOSITORY')
        private readonly _tribe_repository: Repository<RepositoryEntity>
    ){}

    async create(create_repository_dto: CreateRepositoryDto): Promise<RepositoryEntity> {
        const new_repository = await this._tribe_repository.save({
          name: create_repository_dto.name,
          status: create_repository_dto.status,
          state: create_repository_dto.state,
          created_at: create_repository_dto.created_at,
        //   organization: create_tribe_dto.organization,
        });
        return new_repository;
    }

}