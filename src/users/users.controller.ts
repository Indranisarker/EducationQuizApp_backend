import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { createUserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
constructor(private readonly userService: UserService) {}

@Get()
getHello(): string {
  return this.userService.getUser();
}

@Post()
async createUser(@Body() createUserDTO : createUserDTO){
  return this.userService.createUser(createUserDTO)
}
}
