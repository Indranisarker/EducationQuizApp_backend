import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UserCredDTO {
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'dev@company.com',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: 'abcsergfoeirngoi',
  })
  readonly password: string;
}
export class createUserDTO{
  @ApiProperty({
    name: 'first_name',
    description: "User's First Name",
    type: String,
    example: 'Indrani',
  })
  @IsString()
  readonly first_name: string;
  @ApiProperty({
    name: 'last_name',
    description: "User's Last Name",
    type: String,
    example: 'Sarker',
  })
  @IsString()
  readonly last_name: string;
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'indranisarker7@gmail.com',
  })
  @IsString()
  readonly email: string;
  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: '1234',
  })
  @IsString()
  readonly password: string;
}
