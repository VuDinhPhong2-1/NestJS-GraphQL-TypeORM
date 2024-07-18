import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { PetsResolver } from './pet.reslover';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService, PetsResolver],
  exports: [PetModule, PetsService],
})
export class PetModule {}
