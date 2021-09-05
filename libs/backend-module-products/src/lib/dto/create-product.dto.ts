import { ProductEntityModel } from '../entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto implements Omit<ProductEntityModel, 'id'> {
  @ApiProperty()
  product_SKU: string;
  @ApiProperty()
  product_active: boolean;
  @ApiProperty()
  product_depth: number;
  @ApiProperty()
  product_name: string;
  @ApiProperty()
  product_price: number;
  @ApiProperty()
  product_weight: number;
  @ApiProperty()
  product_width: number;
  @ApiProperty()
  product_height: number;
}
