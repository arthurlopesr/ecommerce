import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  @Post()
  async crateUser(@Body() createUser: CreateUsersDto) {
    return {
      ...createUser,
      password: '********',
    };
  }
}
