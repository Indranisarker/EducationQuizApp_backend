import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredDTO, createUserDTO } from 'src/users/dto/user.dto';
import { Users } from 'src/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // async login(@Body() body: { email: string; password: string }) {
  //   const user = await this.authService.validateUser(body.email, body.password);
  //   if (!user) {
  //     return { message: 'Invalid credentials' };
  //   }
  //   return  user ; // Return user data or token for successful login
  // }
  @Post('login')
  userLogin(@Body() userCredential: UserCredDTO): Promise<Users|undefined> {
    return this.authService.userAuth(userCredential);
  }
}