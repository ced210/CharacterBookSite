import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Character extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('int')
	userId: number;

	@Column('varchar')
	name: string;

	@Column('int')
	raceId: number;

	@Column('int')
	classId: number;

	@Column('int')
	alignementId: number;

	@Column('bit')
	isGenderMale: boolean;

	@Column('int')
	age: number;

	@Column('int', {default: 0})
	strenghtScore: number;

	@Column('int', {default: 0})
	constitutionScore: number;

	@Column('int', {default: 0})
	dexterityScrore: number;

	@Column('int', {default: 0})
	intelligenceScore: number;

	@Column('int', {default: 0})
	widsomScore: number;

	@Column('int', {default: 0})
	charismaScore: number;

	@CreateDateColumn()
	create_time: Date;

	@UpdateDateColumn()
	update_time: Date;
}