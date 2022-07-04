import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { BaseEntity } from '../base';
import { Metric } from './adm.metrics.enitity';
import { Tribe } from './adm.tribes.entity';
  
  @Entity({ name: 'adm_repositories', schema: 'public' })

export class RepositoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'text',length: 50, nullable: false })
    name!: string;
  
    @Column({ type: 'char', length:1 , nullable: false })
    state: string;

    @Column({ type: 'char', length:1 , nullable: false })
    status: string;

    @ManyToOne( () => Tribe, (tribe) => tribe.repositories)
    tribe: Tribe 

    @OneToMany(() => Metric, (metric) => metric.repository)
    metrics: Metric[]
  
  }