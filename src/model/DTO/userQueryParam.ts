/* eslint-disable @typescript-eslint/camelcase */
import { IsOptional, IsString } from "class-validator";

export class UserQueryParam {
    @IsString()
    @IsOptional()
    state: string;
    @IsString()
    @IsOptional()
    pet_experience: string;
    @IsString()
    @IsOptional()
    first_name: string;
    @IsString()
    @IsOptional()
    last_name: string;
    @IsString()
    @IsOptional()
    email: string;
}

export const paramToProperty  = {
    first_name: 'firstName',
    last_name: 'lastName',
    pet_experience: 'petExperience',
    state: 'state',
    email: 'email'

}