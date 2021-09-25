import provider, { ClientProvider } from '../Client';
import { ProductInterface } from '@atlascode/coffee-front-components';

export class ProductService {
  constructor(private readonly provider: ClientProvider) {}

  getCatalogProduct() {
    return this.provider.getClient().get<ProductInterface[]>('products', {});
  }
}

export const getInstanceService = () => new ProductService(provider);

export default getInstanceService;
