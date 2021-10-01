import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    // Nesting these calls to make sure creation/update events are triggered, possibly a bug.
    // https://github.com/typeorm/typeorm/issues/5493
    return this.productsRepository.save(
      this.productsRepository.create(createProductDto)
    );
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOne(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productsRepository.update(id, updateProductDto);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
