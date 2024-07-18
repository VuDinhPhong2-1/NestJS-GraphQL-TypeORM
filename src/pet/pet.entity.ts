import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/classes/abstract-entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet extends AbstractEntity {
  @Field(() => Int, { description: 'Tuổi của pet' })
  @Column()
  age: number;

  @Field(() => String, { description: 'Tên của pet' })
  @Column()
  name: string;

  @Field(() => String, {
    nullable: true,
    description: 'Thời điểm pet bị xóa mềm',
  })
  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.pets)
  @JoinColumn({ name: 'userId' })
  user: User;
}
