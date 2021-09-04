import { Test } from '@nestjs/testing';
import { BackendServiceProductsService } from './backend-service-products.service';

describe('BackendServiceProductsService', () => {
  let service: BackendServiceProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendServiceProductsService],
    }).compile();

    service = module.get(BackendServiceProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
