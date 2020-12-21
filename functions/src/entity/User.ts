import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    username: string;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @CreateDateColumn()
    create_time: Date;
}