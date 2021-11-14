import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users2.service';
import { User2 } from './users2.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const users = [
      {
        id: 1,
        screenName: 'potato4d',
        password: '6c614c4e12595a345079b78df3f5e702c6e7ecacae2e4a0430880666ccc55bb', // "test"
      },
    ];
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User2),
          useValue: {
            findOne: ({ where: { screenName } }: { where: { screenName: string } }) =>
              users.find(user => user.screenName === screenName),
            insert: entity => users.push(entity),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('register', () => {
    test('CREATED', async () => {
      expect.assertions(1);

      const registerResult = service.register({
        screenName: 'euxn23',
        password: '12345',
      });

      await expect(registerResult).resolves.toBe(undefined);
    });

    test('CONFLICT', async () => {
      expect.assertions(1);

      const registerPromise = service.register({
        screenName: 'potato4d',
        password: '12345',
      });

      await expect(registerPromise).rejects.toThrow('User is already taken.');
    });
  });
});
