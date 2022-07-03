import {
    Entity,
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { BaseEntity } from '../base';
import { Organization } from './adm.organizations.entity';
import { RepositoryEntity } from './adm.repository.entity';
  
  @Entity({ name: 'adm_tribes', schema: 'public' })

  export class Tribe extends BaseEntity {
    @Column({ type: 'text',length: 50, nullable: false })
    name!: string;
  
    @Column({ type: 'int', default: 0, nullable: false })
    status: number;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @ManyToOne( () => Organization, (organization) => organization.tribes)
    organization: Organization 
  
    @OneToMany(() => RepositoryEntity, (repository) => repository.tribe)
    repositories: RepositoryEntity[]
  }