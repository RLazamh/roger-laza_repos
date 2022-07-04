import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateRepositoryDto } from "../dtos/create.repository.dto";
import { RepositoryEntity } from "../entities";

@Injectable()
export class RepositoryService{
    constructor(
        @Inject('REPOSITORY_ENTITY_REPOSITORY')
        private readonly _repository_repository: Repository<RepositoryEntity>
    ){}

    async create(create_repository_dto: CreateRepositoryDto): Promise<RepositoryEntity> {
        const new_repository = await this._repository_repository.save({
          name: create_repository_dto.name,
          status: create_repository_dto.status,
          state: create_repository_dto.state,
          tribe: {id:create_repository_dto.tribe},

        });
        return new_repository;
    }

    async getAll(): Promise<RepositoryEntity[]> {
        return this._repository_repository.find();
    }

    async getAllByTribe( id : number): Promise<RepositoryEntity[]> {
        const repositories =  await this._repository_repository
        .findBy({tribe : {id : id}})
        if( repositories.length === 0 ){
            throw new NotFoundException('The tribe has no repositories');
        }
        return repositories;
    }

    working() : number {
        return 200;
    }

}