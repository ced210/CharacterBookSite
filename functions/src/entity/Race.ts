import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Race extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar')
	name: string;

	@Column('varchar')
	description: string;

	@Column('varchar')
	sizeDescription: string;

	@Column('varchar')
	ageDescription: string;

	@Column('varchar')
	speedDescription: string;

	@Column('varchar')
	languageDescription: string;
	
	@Column("int")
	minAge: number;
	
	@Column('int')
	maxAge: number;
}