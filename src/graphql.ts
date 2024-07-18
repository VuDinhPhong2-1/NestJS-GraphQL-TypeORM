
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
}

export abstract class IMutation {
    abstract login(loginUserInput: LoginUserInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract refresherToken(refresh_token: string): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract createUser(input?: Nullable<CreateUserInput>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;

    abstract deleteUser(userId?: Nullable<string>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;

    abstract destroyUser(userId?: Nullable<string>): Nullable<UserResponse> | Promise<Nullable<UserResponse>>;
}

export class UserResponse {
    id: string;
    age?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    role: Role;
}

type Nullable<T> = T | null;
