import { Controller, Get, HttpException, HttpStatus, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { size } from 'lodash';
import { UserQueryParam } from '../model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    public async getAll() {
        return await this.userService.getAll();
    }

    @Get('filter')
    @UsePipes(ValidationPipe)
    public async findByFilter(@Query() params:UserQueryParam) {
        if(size(params) == 0)
            throw new HttpException('Cannot filter with empty param', HttpStatus.BAD_REQUEST);

        return await this.userService.getUser(params);
    }
}
