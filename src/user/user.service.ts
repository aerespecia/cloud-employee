import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserQueryParam } from '../model';

import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

    /**
     * Method to get all users
     */
    public async getAll() {
        return await this.repo.find();
    }

    /**
     * Method to get user based on filters
     * 
     * @param params UserQueryParam
     */
    public async getUser(params: UserQueryParam): Promise<User[]> {
        console.log(params);
        const users: User[] = await this.repo.find({
                firstName: params.first_name,
                lastName: params.last_name,
                email: params.email,
                petExperience: params.pet_experience,
                state: params.state,
            });
        return users;
    }

    /**
     * Method to create user
     * 
     * @param user 
     */
    public async create(user: User): Promise<User> {
        return this.repo.save(user);
    }
}
