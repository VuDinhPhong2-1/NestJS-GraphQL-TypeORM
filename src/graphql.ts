
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export class LoginUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class CreatePetInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
    userId: string;
}

export class UpdatePetInput {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export class CreateUserInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class LoginResponse {
    access_token?: Nullable<string>;
    refresh_token?: Nullable<string>;
}

export abstract class IQuery {
    abstract hello(): Nullable<string> | Promise<Nullable<string>>;

    abstract listUser(): Nullable<Nullable<UserResponse>[]> | Promise<Nullable<Nullable<UserResponse>[]>>;
}

export abstract class IMutation {
    abstract login(loginUserInput: LoginUserInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract refresherToken(refresh_token: string): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract createPet(input?: Nullable<CreatePetInput>): Nullable<PetResponse> | Promise<Nullable<PetResponse>>;

    abstract createUser(input?: Nullable<CreateUserInput>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;

    abstract updateUser(input?: Nullable<UpdateUserInput>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;

    abstract deleteUser(userId?: Nullable<string>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;

    abstract destroyUser(userId?: Nullable<string>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;
}

export class PetResponse {
    id: string;
    age?: Nullable<number>;
    name?: Nullable<string>;
    userId: string;
    user: UserResponse;
}

export class User {
    id: string;
    age?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    role: Role;
    pets?: Nullable<Nullable<PetResponse>[]>;
}

export class UserResponse {
    id: string;
    age?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    role: Role;
    pets?: Nullable<Nullable<PetResponse>[]>;
}

type Nullable<T> = T | null;
