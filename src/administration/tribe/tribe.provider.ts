import { DataSource } from 'typeorm';
import { Tribe } from '../entities';

export const tribeProvider = [
  {
    provide: 'TRIBE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tribe),
    inject: ['DATA_SOURCE'],
  },
];