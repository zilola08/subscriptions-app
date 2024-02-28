import { Controller, Post } from '@nestjs/common';
import { CsvImportService } from './csv-import.service';

@Controller('csv-import')
export class CsvImportController {
  constructor(private readonly csvImportService: CsvImportService) { }
  @Post('/')
  async importData () {
    const importedData = await this.csvImportService.importData('/Users/z/Desktop/excel_data2.csv');
    return {success: true, data: importedData}
  }
}
