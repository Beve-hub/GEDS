import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TrackingService {
  constructor(private readonly databaseService: DatabaseService) {}

  generateTrackingCode = async (origin: string, destination: string) => {
    try {
      const code = await this.generateUniqueCode();
      if (code) {
        const details = await this.databaseService.product.create({
          data: { origin: origin, destination: destination, trackingId: code },
        });
        return { message: 'successful', data: details };
      }
      return { message: 'there was an error', data: '' };
    } catch (error) {
      console.error(error);
      return { message: 'there was an error', data: '' };
    }
  };

  trackProduct = async (trackingId: string) => {
    try {
      const found = await this.databaseService.product.findFirst({
        where: { trackingId },
      });
      if (found) {
        return {
          message: `Your Item ${trackingId},  from: ${found.origin} .. to: ${found.destination} will arrive in 5days`,
        };
      }
      return { message: 'item not found', data: '' };
    } catch (error) {
      return { message: 'there was an error', data: '' };
    }
  };

  deleteProduct = async (trackingId: string) => {
    try {
      const deleted = await this.databaseService.product.deleteMany({
        where: { trackingId },
      });
      if (deleted) {
        return {
          message: `Your Item ${trackingId},deleted successfully`,
        };
      }
      return { message: 'item not found', data: '' };
    } catch (error) {
      return { message: 'there was an error', data: '' };
    }
  };

  generateUniqueCode = async () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let trackingCode = '';

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      trackingCode += characters[randomIndex];
    }

    return trackingCode;
  };
}
