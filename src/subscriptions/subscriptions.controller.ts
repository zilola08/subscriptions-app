import { Controller, Get } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionService: SubscriptionsService) {}
  @Get('/')
  async getSubscriptionsByRegion() {
    const subscriptionsByRegion = await this.subscriptionService.subscriptionsByRegion();
    return { success: true, data: subscriptionsByRegion };
  }
}
