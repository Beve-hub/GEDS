import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackingService } from './tracking.service';
export class trackingDTO {
  origin: string;
  destination: string;
}

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
  async generateTrackingCode(@Body() trackingDto: trackingDTO) {
    return await this.trackingService.generateTrackingCode(
      trackingDto.origin,
      trackingDto.destination,
    );
  }
  @Get(':id')
  async trackProduct(@Param('id') id: string) {
    return await this.trackingService.trackProduct(id);
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.trackingService.deleteProduct(id);
  }
}
