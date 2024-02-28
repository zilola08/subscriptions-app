import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PrismaModule } from './prisma/prisma.module';
import { CsvImportModule } from './csv-import/csv-import.module';

@Module({
  imports: [SubscriptionsModule, PrismaModule, CsvImportModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
