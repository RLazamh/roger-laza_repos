import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
  } from 'typeorm';
import { Tribe } from './adm.tribes.entity';
  
  @Entity({ name: 'adm_organizations', schema: 'public' })

  export class Organization {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'text',length: 50, nullable: false })
    name!: string;
  
    @Column({ type: 'int', default: 0, nullable: false })
    status: number;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => Tribe, (tribe) => tribe.organization)
    tribe: Tribe[]
  
  }