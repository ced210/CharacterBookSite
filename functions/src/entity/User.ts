import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './Role';
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

    @ManyToOne(() => Role, role => role)
    role: Role;
}