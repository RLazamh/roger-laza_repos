import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateTribeDto } from "../dtos/create.tribe.dto";
import { Tribe } from "../entities";

@Injectable()
export class TribeService{
    constructor(
        @Inject('TRIBE_REPOSITORY')
        private readonly _tribe_repository: Repository<Tribe>
    ){}

    async create(create_tribe_dto: CreateTribeDto): Promise<Tribe> {
        const new_tribe = await this._tribe_repository.save({
          name: create_tribe_dto.name,
          status: create_tribe_dto.status,
          organization: {'id':create_tribe_dto.organizations},
        });
        return new_tribe;
    }

}