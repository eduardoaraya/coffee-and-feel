import client, { Client } from '../Client';

export class ProductService {
  constructor(private readonly client: Client) {}

  getCatalogProduct() {
    return this.client.api.get('catalog/products');
  }
}

export default new ProductService(client);
