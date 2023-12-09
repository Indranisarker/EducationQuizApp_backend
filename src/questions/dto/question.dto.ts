import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsString, Max, Min } from 'class-validator';


export class createQuizDTO{
    @ApiProperty({
        name: 'select_course',
        description: 'Select Quiz Course',
        type: String,
        example: 'MATH',
      })
      @IsString()
      @IsIn(['Math', 'Science', 'History', 'English'])
      readonly select_course: string; 
    
  @ApiProperty({
    name: 'question',
    description: "New question",
    type: String,
    example: 'What is your name?',
  })
  @IsString()
  readonly question: string;
  @ApiProperty({
    name: 'option1',
    description: "Option 1",
    type: String,
    example: 'abc',
  })
  @IsString()
  readonly option1: string;
  @ApiProperty({
    name: 'option2',
    description: "Option 2",
    type: String,
    example: 'dfe',
  })
  @IsString()
  readonly option2: string;
  @ApiProperty({
    name: 'option3',
    description: "Option 3",
    type: String,
    example: 'abcd',
  })
  @IsString()
  readonly option3: string;
  @ApiProperty({
    name: 'option4',
    description: "Option 4",
    type: String,
    example: 'abcde',
  })
  @IsString()
  readonly option4: string;


  @ApiProperty({
    name: 'correctAnswer',
    description: 'The correct answer',
    type: String,
    example: 'ab',
  })
  @IsString()
  readonly correctAnswer: string;
}
