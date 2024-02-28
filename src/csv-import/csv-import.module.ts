import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CsvImportController } from './csv-import.controller';
import { CsvImportService } from './csv-import.service';

@Module({
  imports: [PrismaModule],
  controllers: [CsvImportController],
  providers: [CsvImportService]
})
export class CsvImportModule {}
