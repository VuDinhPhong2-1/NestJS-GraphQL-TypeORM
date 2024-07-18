import { UserModule } from 'src/users/user.module';
import { DataloaderService } from './dataloader.service';
import { Module } from '@nestjs/common';
import { PetModule } from 'src/pet/pet.module';

@Module({
  imports: [UserModule, PetModule],
  providers: [DataloaderService, DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
