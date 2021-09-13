import { ProductEntityModel } from '../entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsBoolean,
  IsCurrency,
  IsDecimal,
  IsNumberString,
} from 'class-validator';

export class CreateProductDto implements Omit<ProductEntityModel, 'id'> {
  @ApiProperty()
  @IsString()
  product_SKU: string;

  @ApiProperty()
  @IsBoolean()
  product_active: boolean;

  @ApiProperty({ default: '1.85' })
  @IsNumberString()
  product_depth: string;

  @ApiProperty()
  @IsString()
  product_name: string;

  @ApiProperty({ default: '1.55' })
  @IsNumberString()
  @IsCurrency()
  product_price: string;

  @ApiProperty({ default: 1.35 })
  @IsNumberString()
  @IsDecimal()
  product_weight: string;

  @ApiProperty({ default: 1.75 })
  @IsNumberString()
  @IsDecimal()
  product_width: string;

  @ApiProperty({ default: 0.55 })
  @IsNumberString()
  @IsDecimal()
  product_height: string;
}
