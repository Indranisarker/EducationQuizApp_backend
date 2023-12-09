import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Announcement } from 'src/models/announcement.model';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementService {
    constructor(@InjectRepository(Announcement) private readonly announceRepository:Repository<Announcement>){}
    
    async getAllAnnouncement(): Promise<Announcement[]>{
      return this.announceRepository.find();
    }
    async getAnnouncementById(id:number): Promise<Announcement | undefined>{
      return this.announceRepository.findOne({where:{ id }});
    }
    
    async createAnnouncement(announcement:Announcement): Promise<Announcement> {
        const newAnnouncement = this.announceRepository.create(announcement);
        return this.announceRepository.save(newAnnouncement);
      }
}