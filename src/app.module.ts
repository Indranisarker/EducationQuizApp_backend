import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { QuestionsModule } from './questions/questions.module';
import DatabaseConnection from './database/connection';
@Module({
  imports: [UsersModule, 
  ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    useFactory:DatabaseConnection,
    inject:[ConfigService]
  }
  ),
  AuthModule,
  AnnouncementModule,
  QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
