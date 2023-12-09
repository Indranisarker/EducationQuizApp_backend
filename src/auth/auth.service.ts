import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service'
import * as bcrypt from 'bcrypt'; // Import bcrypt or your preferred password hashing library
import { Users } from 'src/models/user.model';
import { UserCredDTO } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async userAuth(userCredential: UserCredDTO): Promise<Users | undefined> {
    const user = await this.userService.findByEmail(userCredential.email);

    if (user.email && bcrypt.compareSync(userCredential.password, user.password)) {
      return user; // Return user data if credentials are valid
    }
    return null; // Return null if invalid credentials
  }
  }

