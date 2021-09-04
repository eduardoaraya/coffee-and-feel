import { Test } from '@nestjs/testing';
import { BackendServiceProductsController } from './backend-service-products.controller';
import { BackendServiceProductsService } from './backend-service-products.service';

describe('BackendServiceProductsController', () => {
  let controller: BackendServiceProductsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendServiceProductsService],
      controllers: [BackendServiceProductsController],
    }).compile();

    controller = module.get(BackendServiceProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
