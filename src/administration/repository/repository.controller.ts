import { Controller, Get, Post } from '@nestjs/common';
import { CreateRepositoryDto } from '../dtos/create.repository.dto';
import { RepositoryEntity } from '../entities';
import { RepositoryService } from './repository.service';

@Controller('repository')
export class RepositoryController {
    constructor(private readonly _repository_service: RepositoryService ){}

    @Get()
    async getAll() {
        const data = await this._repository_service.getAll();
        return { data };
    }

    @Post()
    async createRepository() : Promise<RepositoryEntity> {
        const create_repository_dto = new CreateRepositoryDto()
        create_repository_dto.name = 'Roger Laza';
        create_repository_dto.status = "1";
        create_repository_dto.state = "1";
        create_repository_dto.created_at = new Date();
        create_repository_dto.tribe = 1;
        return this._repository_service.create(create_repository_dto);
    }

    // @Get('fake')
    // async getRepositories() : Promise<any> {
    //     return 'Hello world';
    // }
}
