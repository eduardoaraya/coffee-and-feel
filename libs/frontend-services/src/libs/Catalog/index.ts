import provider, { ClientProvider } from '../ClientProvider';
import { ProductInterface } from '@atlascode/coffee-front-components';

export class ProductService {
  constructor(private readonly provider: ClientProvider) {}

  async getCatalogProduct() {
    const { data } = await this.provider
      .getClient()
      .get<ProductInterface[]>('catalog', {});
    return data;
  }
}

export const getInstanceService = () => new ProductService(provider);

export default getInstanceService;
