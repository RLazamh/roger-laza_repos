import { Controller, Get, Post } from '@nestjs/common';
import { CreateRepositoryDto } from '../dtos/create.repository.dto';
import { RepositoryEntity } from '../entities';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {
    constructor(private readonly _organization_service: RepositoryService ){}

    @Post()
    createRepository() : Promise<RepositoryEntity> {
        const create_repository_dto = new CreateRepositoryDto()
        // const tribe = new Tribe();
        create_repository_dto.name = 'Roger Laza';
        create_repository_dto.status = "1";
        create_repository_dto.state = "1";
        create_repository_dto.created_at = new Date();
        // create_repository_dto.tribe = tribe;
        return this._organization_service.create(create_repository_dto);
    }

    @Get()
    getRepositories() : string {
        return 'Hello world';
    }
}
