import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(size: number) {
    return {
      data: {
        records: Array.from({ length: size }).map(
          (_, index) => `Cat${index + 1}`,
        ),
      },
    };
  }
}
