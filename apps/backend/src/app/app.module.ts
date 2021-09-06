import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from '@atlascode/coffee-backend-module-products';
import { getConnectionOptions } from 'typeorm';

// Remember to initialize the node shell process from the root folder as DotEnv uses process.cwd as root path.
export const envFilePath =
  process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({ envFilePath: envFilePath }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        } as TypeOrmModuleOptions),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
