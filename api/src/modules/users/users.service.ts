import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './interface/users.interface';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  async createUsers(createUsersDto: CreateUsersDto): Promise<Users> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUsersDto.password, saltOrRounds);

    const user: Users = {
      ...createUsersDto,
      password: passwordHashed,
      id: this.users.length + 1,
    };

    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<Users[]> {
    return this.users;
  }
}
