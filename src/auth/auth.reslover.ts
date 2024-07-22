import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
// import { LoginResponse, LoginUserInput } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LoginResponse } from 'src/graphql';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Resolver(() => LoginResponse)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation(() => LoginResponse)
  async refresherToken(@Args('refresh_token') refresh_token: string) {
    return this.authService.processNewToken(refresh_token);
  }

  @Mutation()
  async logout(@Args('userId') userId: string) {
    return this.authService.deleteCookieAndToken(userId);
  }

  @Query()
  async getUserFromToken(@Args('access_token') access_token: string) {
    console.log("accessToken",access_token)
    const user = await this.authService.decodeToken(access_token);
    return user;
  }
}
