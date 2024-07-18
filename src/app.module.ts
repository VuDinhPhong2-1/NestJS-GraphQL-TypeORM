import { PetsService } from './pet/pets.service';
import { PetModule } from './pet/pet.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from 'db/data-source';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { DataloaderMiddleware } from './common/middleware/dataloader.middleware';
import { DataloaderModule } from './common/dataloader/dataloader.module';
import { DataloaderService } from './common/dataloader/dataloader.service';
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload';

@Module({
  imports: [
    DataloaderModule,
    PetModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [DataloaderModule],
      inject: [ConfigService, DataloaderService],
      useFactory: async (
        configService: ConfigService,
        dataloaderService: DataloaderService,
      ) => {
        const graphqlConfig = configService.get('graphql');
        return {
          ...graphqlConfig,
          typePaths: ['./**/*.graphql'], // Đường dẫn tới các tệp schema GraphQL
          context: async ({ req }: { req: Request; res: Response }) => {
            return {
              req: {
                ...req,
              },
              loaders: dataloaderService.getLoaders(),
            };
          },
        };
      },
    }),
    TypeOrmModule.forRoot(dataSourceOption),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DataloaderMiddleware).forRoutes('*'); // Apply middleware for all routes
  }
}
