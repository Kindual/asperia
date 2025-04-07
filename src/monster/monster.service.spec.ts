import { Test, TestingModule } from '@nestjs/testing';
import { MonsterService } from './monster.service';

describe('MonsterService', () => {
  let service: MonsterService;

  beforeEach(async () => {
    const moduleTest: TestingModule = await Test.createTestingModule({
      providers: [MonsterService],
    }).compile();

    service = moduleTest.get<MonsterService>(MonsterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
