import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({ required: false })
  product_SKU?: string;
  @ApiProperty({ required: false })
  product_active?: boolean;
  @ApiProperty({ required: false })
  product_depth?: number;
  @ApiProperty({ required: false })
  product_name?: string;
  @ApiProperty({ required: false })
  product_price?: number;
  @ApiProperty({ required: false })
  product_weight?: number;
  @ApiProperty({ required: false })
  product_height?: number;
  @ApiProperty({ required: false })
  product_width?: number;
}
