import { ProductEntityModel } from '../entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsCurrency,
  IsDecimal,
} from 'class-validator';

export class CreateProductDto implements Omit<ProductEntityModel, 'id'> {
  @ApiProperty()
  @IsString({ message: 'Product SKU must be of string type' })
  product_SKU: string;

  @ApiProperty()
  @IsBoolean({ message: 'Product Active field must be a boolean' })
  product_active: boolean;

  @ApiProperty()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  product_depth: number;

  @ApiProperty()
  @IsString({ message: 'Product name must be of type string' })
  product_name: string;

  @ApiProperty()
  @IsCurrency()
  product_price: number;

  @ApiProperty()
  @IsDecimal()
  product_weight: number;

  @ApiProperty()
  @IsDecimal()
  product_width: number;

  @ApiProperty()
  @IsDecimal()
  product_height: number;
}
