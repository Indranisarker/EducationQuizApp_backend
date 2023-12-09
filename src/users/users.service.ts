import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) private readonly userRepository:Repository<Users>){}

  getUser(): string {
    return 'I am an User';
  }
  // async createUser(user:Users){
  //   const result = this.userRepository.insert(user)
  //   return result
  // }
  async createUser(user:Users): Promise<Users> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  async findByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({where:{email }});
  }


}



