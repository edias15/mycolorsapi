import { Test, TestingModule } from '@nestjs/testing';
import { ColornamesService } from './colornames.service';

describe('ColornamesService', () => {
  let service: ColornamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColornamesService],
    }).compile();

    service = module.get<ColornamesService>(ColornamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
