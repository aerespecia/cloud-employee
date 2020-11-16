import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let repo: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<User>(User);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repo).toBeDefined();
  });
});
