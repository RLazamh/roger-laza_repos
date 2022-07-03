import {
    Entity,
    Column,
    ManyToOne,
  } from 'typeorm';
import { BaseEntity } from '../base';
import { RepositoryEntity } from './adm.repository.entity';
  
@Entity({ name: 'adm_metrics', schema: 'public' })

export class Metric extends BaseEntity {
    @Column({ type: 'decimal', nullable: false })
    coverage!: number;
  
    @Column({ type: 'int', default: 0, nullable: false })
    bugs: number;

    @Column({ type: 'int', default: 0, nullable: false })
    vulnerabilities: number;

    @Column({ type: 'int', default: 0, nullable: false })
    hostpost: number;

    @Column({ type: 'int', default: 0, nullable: false })
    code_smell: number;
  
    @ManyToOne(() => RepositoryEntity, (repository) => repository.metrics)
    repository: RepositoryEntity
  
  }