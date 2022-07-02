import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BaseEntity,
  } from 'typeorm';
  
  @Entity('adm-organizations')
  export class Organization extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'text',length: 50, nullable: false })
    name!: string;
  
    @Column({ type: 'int', default: true, nullable: false })
    status: number;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
  }