import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import {
  ApiOperation,
  ApiProperty,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

class RecordsDto {
  @ApiProperty({ description: 'List of cat names', example: ['cat1', 'cat2'] })
  records: string[];
}

class DataDto {
  @ApiProperty({ description: 'The records data containing a list of cats' })
  data: RecordsDto;
}

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: 'Get {size} cats.' })
  @ApiQuery({
    name: 'size',
    type: 'number',
    description: 'The number of cats, default is 10.',
    required: false,
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'The Cat Records',
    type: DataDto,
  })
  @Get()
  getCats(@Query('size', ParseIntPipe) size: number) {
    return this.catsService.findAll(size);
  }
}
