import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createAnnounceDTO{
    @ApiProperty({
      name: 'courseTitle',
      description: "Course Title",
      type: String,
      example: 'Math',
    })
    @IsString()
    readonly courseTitle: string;
    @ApiProperty({
      name: 'announcement',
      description: "Quiz Announcement",
      type: String,
      example: 'Quiz on LCD',
    })
    @IsString()
    readonly announcement: string;
    @ApiProperty({
      name: 'date',
      description: "Quiz Date",
      type: String,
      example: 'Wed Dec 06,2023',
    })
    @IsString()
    readonly date: Date;
  }
  