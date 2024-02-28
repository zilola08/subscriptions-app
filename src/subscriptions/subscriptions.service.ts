import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor( private readonly prisma: PrismaService) { }
  
  async subscriptionsByRegion() {
    try {
      const subscriptionsByRegions = await this.prisma.data.groupBy({
        by: ['region'],
        _sum: {
          subscribers: true,
        },
      })

      if (!subscriptionsByRegions) throw new NotFoundException();
      console.log(subscriptionsByRegions);
      return {subscriptionsByRegions};

    } catch (error) {
      console.log(error);
    }
  }
}