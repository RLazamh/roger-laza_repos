import { Controller, Get, Post } from "@nestjs/common";
import { CreateTribeDto } from "../dtos/create.tribe.dto";
import { TribeService } from "./tribe.service";
import { Tribe } from "../entities";

@Controller('tribe')
export class TribeController {
    constructor(private readonly _tribe_service: TribeService){}
    
    @Post()
    createTribe() : Promise<Tribe> {
        const create_tribe_dto = new CreateTribeDto()
        // const organization = new Organization();
        create_tribe_dto.name = 'Nueva Tribu';
        create_tribe_dto.status = 1;
        create_tribe_dto.created_at = new Date();
        // create_tribe_dto.organization = organization;
        return this._tribe_service.create(create_tribe_dto);
    }

    @Get()
    getTribes() : string {
        return 'Hello world';
    }

}
