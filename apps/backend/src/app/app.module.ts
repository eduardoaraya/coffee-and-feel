import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  Product,
  ProductsModule,
} from '@atlascode/coffee-backend-module-products';

// Remember to initialize the node shell process from the root folder as DotEnv uses process.cwd as root path.
export const envFilePath =
  process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({ envFilePath: envFilePath }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        password: configService.get('POSTGRES_PASSWORD'),
        port: +configService.get('POSTGRES_PORT'),
        database: configService.get('POSTGRES_DATABASE'),
        username: configService.get('POSTGRES_USERNAME'),
        synchronize: process.env.NODE_ENV === 'development',
        entities: [Product],
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
