import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/models/user.model';
import { UserService } from 'src/users/users.service';

@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  providers: [AuthService,UserService]
})
export class AuthModule {}
