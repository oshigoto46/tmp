// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import User from './users.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>
//   ) {}

//   async getByEmail(email: string): Promise<User | Error> {
//     const user = await this.usersRepository.findOne({ email });
//     if (user) {
//       return user;
//     }
//     throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
//   }
// }
