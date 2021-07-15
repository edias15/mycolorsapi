import { Test, TestingModule } from '@nestjs/testing';
import { ColornamesController } from './colornames.controller';
import { ColornamesService } from './colornames.service';

describe('ColornamesController', () => {
  let controller: ColornamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColornamesController],
      providers: [ColornamesService],
    }).compile();

    controller = module.get<ColornamesController>(ColornamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
