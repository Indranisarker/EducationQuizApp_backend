import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { createQuizDTO } from './dto/question.dto';
import { Questions } from 'src/models/question.model';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly quizService: QuestionsService) {}
  @Get()
  async getAllQuestions(): Promise<Questions[]> {
    return this.quizService.getAllQuestions();
  }
   @Get(':select_course')
  async getQuestionsByCourse(@Param('select_course') select_course: string) {
    const question = await this.quizService.getQuestionsByCourse(select_course);
    if (!question) {
      throw new NotFoundException(`Questions with course ${select_course} not found`);
    }
    return question;
  }
  @Post()
  async createQuiz(@Body() quizData: createQuizDTO) {
    return this.quizService.createQuestions(quizData);
  }
  
}
