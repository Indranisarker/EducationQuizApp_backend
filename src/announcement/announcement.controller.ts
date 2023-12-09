import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { createAnnounceDTO } from './dto/announcement.dto';
import { Announcement } from 'src/models/announcement.model';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  async getAllAnnouncement(): Promise<Announcement[]>{
    return this.announcementService.getAllAnnouncement();
  }
  @Get(':id')
  async getAnnouncementById(@Param('id') id: string): Promise<Announcement | undefined> {
    const parsedId = parseInt(id, 10);
    if(!isNaN(parsedId)){
    const announcement = await this.announcementService.getAnnouncementById(parsedId);
    return announcement;
  }
}

  @Post()
  async createAnnouncement(@Body() announcementData: createAnnounceDTO) {
    // Logic to handle saving the announcement data to your database
    return this.announcementService.createAnnouncement(announcementData);
  }
}
