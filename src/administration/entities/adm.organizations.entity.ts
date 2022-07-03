import {
    Entity,
    Column,
    OneToMany,
  } from 'typeorm';
import { BaseEntity } from '../base';
import { Tribe } from './adm.tribes.entity';
  
  @Entity({ name: 'adm_organizations', schema: 'public' })

export class Organization extends BaseEntity {
  @Column({ type: 'text',length: 50, nullable: false })
  name!: string;

  @Column({ type: 'int', default: 0, nullable: false })
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.organization)
  tribes: Tribe[]
  
}