import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        nullable: false,
      })
      create_at: Date = new Date();
    
    @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    nullable: false,
    })
    update_at: Date = new Date();
}