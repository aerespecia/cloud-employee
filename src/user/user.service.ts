import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paramToProperty, User, UserQueryParam } from '../model';
import { Repository } from 'typeorm';
import { filter, toLower } from 'lodash';

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
        const filterObject = {};

        for (const key of Object.keys(params)) {
            filterObject[paramToProperty[key]] = params[key];
          }
        
        let users: User[];
        try {
            users = await this.repo.find(filterObject);
        } catch (error) {
            throw new HttpException({
                message: 'Error while searching for a user',
                error
            }, HttpStatus.BAD_REQUEST);
        }
        
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
