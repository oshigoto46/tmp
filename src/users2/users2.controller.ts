import { Controller, Post, HttpCode, HttpStatus, Body, HttpException } from '@nestjs/common';
import { CreateUserDTO, LoginUserDTO } from './users2.dto';
import { UsersService } from './users2.service';
import { User2 } from './users2.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (this.usersService.findUserByScreenName(createUserDTO.screenName)) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `Screen name '${createUserDTO.screenName}' is already taken.`,
        },
        409
      );
    }
    try {
      await this.usersService.register(createUserDTO);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500
      );
    }
    return;
  }

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO): Promise<User2> {
    let user: User2;
    try {
      user = await this.usersService.loginUser(loginUserDTO.screenName, loginUserDTO.password);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500
      );
    }
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User Not found.',
        },
        404
      );
    }
    return user;
  }
}
