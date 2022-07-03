import { DataSource } from 'typeorm';
import { RepositoryEntity } from '../entities';

export const repositoryProvider = [
  {
    provide: 'REPOSITORY_ENTITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RepositoryEntity),
    inject: ['DATA_SOURCE'],
  },
];