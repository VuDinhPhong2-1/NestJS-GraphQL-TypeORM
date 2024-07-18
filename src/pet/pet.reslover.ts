import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput, PetResponse } from 'src/graphql';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Mutation('createPet')
  async createPet(@Args('input') createPetInput: CreatePetInput) {
    console.log('createPetInput', createPetInput);

    return this.petsService.createPet(createPetInput);
  }
  // @Query('queryPetById')
  // async queryPetById(@Args('petId') petId: string) {
  //   return this.petsService.queryPetById(petId);
  // }

  // @Mutation('updatePet')
  // async updatePet(@Args('input') input: UpdatePetInput) {
  //   return this.petsService.updatePet(input);
  // }

  // @Mutation('deletePet')
  // async deletePet(@Args('petId') petId: string) {
  //   return this.petsService.deletePet(petId);
  // }

  // @Mutation('destroyPet')
  // async destroyPet(@Args('petId') petId: string) {
  //   return this.petsService.destroyPet(petId);
  // }
}
