import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
import { Tribe } from './adm.tribes.entity';
  
  @Entity({ name: 'adm_tribes', schema: 'public' })

  export class RepositoryEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'text',length: 50, nullable: false })
    name!: string;
  
    @Column({ type: 'char', length:1 , nullable: false })
    state: string;

    @Column({ type: 'char', length:1 , nullable: false })
    status: string;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    created_at: Date;

    @ManyToOne( () => Tribe, (tribe) => tribe.repository)
    tribe: Tribe 
  
  }