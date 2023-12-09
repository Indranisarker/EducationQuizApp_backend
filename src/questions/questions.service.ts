import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from 'src/models/question.model';
import { Repository } from 'typeorm';
import { createQuizDTO } from './dto/question.dto';




@Injectable()
export class QuestionsService { 
    constructor(@InjectRepository(Questions) private readonly questionRepository:Repository<Questions>){}

    async getAllQuestions(): Promise<Questions[]> {
      return this.questionRepository.find();
    }
    async getQuestionsByCourse(select_course: string): Promise<Questions | undefined> {
      return this.questionRepository.findOne({ where: { select_course } });
    }
    async createQuestions(questions:Questions): Promise<Questions> {
        const newQuestion = this.questionRepository.create(questions);
        return this.questionRepository.save(newQuestion);
      }
  
}


