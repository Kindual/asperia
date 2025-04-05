import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';

@Module({
  providers: [MonsterService],
  controllers: [MonsterController]
})
export class MonsterModule {}
