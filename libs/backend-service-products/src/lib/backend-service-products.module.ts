import { Module } from '@nestjs/common';
import { BackendServiceProductsController } from './backend-service-products.controller';
import { BackendServiceProductsService } from './backend-service-products.service';

@Module({
  controllers: [BackendServiceProductsController],
  providers: [BackendServiceProductsService],
  exports: [BackendServiceProductsService],
})
export class BackendServiceProductsModule {}
