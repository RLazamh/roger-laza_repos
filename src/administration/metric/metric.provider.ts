import { DataSource } from 'typeorm';
import { Metric } from '../entities';

export const metricProvider = [
  {
    provide: 'METRIC_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Metric),
    inject: ['DATA_SOURCE'],
  },
];