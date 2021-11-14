import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from '../users.entity';
describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('and the user is not matched', () => {
    // let findOne: jest.Mock;
    // const user: User = new User();
    // beforeEach(() => {
    //   findOne.mockReturnValue(user);
    // });
    it('should throw an error', async () => {
      await expect(usersService.getByEmail('test@test.com')).rejects.toThrow();
    });
  });

  // it('getting a user by email', async () => {
  //   //const user: User = new User();
  //   const user: User = new User();
  //   let findOne: jest.Mock;
  //   findOne.mockReturnValue(undefined);
  //   //findOne.mockReturnValue(Promise.resolve(user));
  //   //const fetchedUser = await userService.getByEmail('hoge@gmail.com');
  //   //expect(fetchedUser).toEqual(user);
  //   await expect(userService.getByEmail('test@test.com')).rejects.toThrow();
  //   //expect().toBeDefined();
  // });
});
