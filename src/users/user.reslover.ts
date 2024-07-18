import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput, UserResponse } from 'src/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Mutation(() => UserResponse)
  async createUser(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  // @Mutation(() => UserResponse)
  // async updateUser(@Args('input') input: UpdateUserInput) {
  //   return this.usersService.updateUser(input);
  // }

  @Mutation(() => UserResponse)
  async deleteUser(@Args('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }

  @Mutation(() => UserResponse)
  async destroyUser(@Args('userId') userId: string) {
    return this.usersService.destroyUser(userId);
  }
}
