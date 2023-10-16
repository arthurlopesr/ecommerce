import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './interface/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async crateUser(@Body() createUser: CreateUsersDto): Promise<Users> {
    return this.usersService.createUsers(createUser);
  }

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.getAllUsers();
  }
}
