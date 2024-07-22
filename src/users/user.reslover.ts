import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput, User as Users } from 'src/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { IDataloaders } from 'src/common/dataloader/dataloader.interface';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard, AdminGuard)
  @Mutation(() => Users)
  async createUser(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => Users)
  async updateUser(@Args('input') input: UpdateUserInput) {
    return this.usersService.updateUser(input);
  }

  @Mutation(() => Users)
  async deleteUser(@Args('userId') userId: string) {
    return this.usersService.deleteUser(userId);
  }

  @Mutation(() => Users)
  async destroyUser(@Args('userId') userId: string) {
    return this.usersService.destroyUser(userId);
  }

  @Query()
  async listUser(): Promise<Users[]> {
    return await this.usersService.listUser();
  }

  @ResolveField()
  async pets(
    @Parent() userResponse: Users,
    @Context() { loaders }: { loaders: IDataloaders },
  ) {
    try {
      const pets = await loaders.petsLoader.load(userResponse.id);
      return pets;
    } catch (error) {
      console.error('Error loading pets:', error);
      throw error; // Throwing error to propagate it further
    }
  }
}
