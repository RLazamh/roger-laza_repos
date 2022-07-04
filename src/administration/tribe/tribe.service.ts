import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateTribeDto } from "../dtos/create.tribe.dto";
import { Tribe } from "../entities";

export interface TribeFindOne {
    id?: number;
    status?: number;
}
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

    async getOne(id: number, tribe_entity?: Tribe) {
        const tribe = await this._tribe_repository
          .findOne({where : { id : id } })
          .then(t => (!tribe_entity ? t : !! t && tribe_entity.id === t.id ? t : null));
    
        if (!tribe)
          throw new NotFoundException('Tribe does not exists');
    
        return tribe;
    }

    async findOne(data: TribeFindOne) {
        return await this._tribe_repository
          .createQueryBuilder('tribe')
          .where(data)
          .getOne();
    }
    
    working() : number {
        return 200;
    }

}