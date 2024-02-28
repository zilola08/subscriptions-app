import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CsvImportService {
  constructor(private readonly prisma: PrismaService) {}

  async importData(filePath: string): Promise<void> {
    try {
      const csvData = fs.readFileSync(filePath, 'utf8');

      const rows = csvData.split('\n');

      for (let i = 1; i < rows.length-1; i++) {
        const row = rows[i];
        const columns = row.split(';');
        const [region, items, units, subscribers] = columns;
        const normalizedRegion = region.toUpperCase();
        const parsedItems = parseInt(items.replace(/\D/g, ''));
        const parsedUnits = parseInt(units.replace(/\D/g, ''));
        const parsedSubscribers = parseInt(subscribers.replace(/\D/g, ''));
        console.log(subscribers, parsedSubscribers);
        await this.prisma.data.create({
          data: {
            region: normalizedRegion,
            items: parsedItems,
            units: parsedUnits,
            subscribers: parsedSubscribers
          },
        });
      }

      console.log('Data imported successfully');
    } catch (error) {
      console.error('Error importing data:', error);
    }
  }
}