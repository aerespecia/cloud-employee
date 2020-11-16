import { HttpException, HttpStatus } from '@nestjs/common';
import * as _ from 'lodash';
import { UserService } from 'src/user/user.service';
import { createConnection, ConnectionOptions } from 'typeorm';
import { configService } from '../config/config.service';
import { User } from '../model';
import { dummyUsers } from './dummyUsers';


async function run() {


  const opt = {
    ...configService.getTypeOrmConfig(),
    debug: true
  };

  const connection = await createConnection(opt as ConnectionOptions);
  const userService = new UserService(connection.getRepository(User));
  
  let users: User[];
  try {
    users =  _.each(dummyUsers, async (u: User) => {
        console.log('Saving to Database: ' + u)
        await userService.create(u);
      });
  } catch (error) {
    throw new HttpException({
        message: 'Error encountered while seeding mock data',
        error,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  return users;
}

run()
  .then(_ => console.log('...wait for script to exit'))
  .catch(error => console.error('seed error', error));