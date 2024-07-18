import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/classes/abstract-entity';
import { Role } from 'src/graphql';
import { Pet } from 'src/pet/pet.entity';
import { Entity, Column, Unique, OneToMany } from 'typeorm';

@Entity()
@Unique(['email'])
@ObjectType()
export class User extends AbstractEntity {
  @Field(() => String, { description: 'password của người dùng' })
  @Column({ nullable: true })
  password: string;

  @Field(() => Int, { description: 'Tuổi của người dùng' })
  @Column()
  age: number;

  @Field(() => String, { description: 'Tên của người dùng' })
  @Column()
  name: string;

  @Field(() => String, { description: 'Email người dùng' })
  @Column()
  email: string;

  @Field(() => Role, { description: 'Vai trò của người dùng' })
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @Field(() => String, { description: 'refresh_token người dùng' })
  @Column({ nullable: true })
  refresh_token?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Thời điểm người dùng bị xóa mềm',
  })
  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: string;

  @OneToMany(() => Pet, pet => pet.user)
  pets: Pet[];
}
