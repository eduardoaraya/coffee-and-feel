import { Controller } from '@nestjs/common';
import { BackendServiceProductsService } from './backend-service-products.service';

@Controller('backend-service-products')
export class BackendServiceProductsController {
  constructor(
    private backendServiceProductsService: BackendServiceProductsService
  ) {}
}
