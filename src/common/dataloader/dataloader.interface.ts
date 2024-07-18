import DataLoader from 'dataloader';
import { PetModule } from 'src/pet/pet.module';
import { User } from 'src/users/user.entity';
export interface IDataloaders {
  usersLoader: DataLoader<string, User>;
  petsLoader: DataLoader<string, PetModule[]>;
}
