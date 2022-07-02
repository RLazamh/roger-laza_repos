import { DataSource } from 'typeorm';
import { Organization } from '../entities';

export const organizationProvider = [
  {
    provide: 'ORGANIZATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Organization),
    inject: ['DATA_SOURCE'],
  },
];