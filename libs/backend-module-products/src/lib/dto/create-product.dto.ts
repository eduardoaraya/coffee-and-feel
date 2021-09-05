import { ProductEntityModel } from '../entities/product.entity';

export class CreateProductDto implements Omit<ProductEntityModel, 'id'> {
  product_SKU: string;
  product_active: boolean;
  product_depth: number;
  product_name: string;
  product_price: number;
  product_weight: number;
  product_width: number;
}
