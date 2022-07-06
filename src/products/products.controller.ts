import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Put,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

interface IUser {
  name: string;
  description: string;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAll();
  }

  // @Get('hot')
  // getSpecialProducts(): string {
  //   return 'Te vamos a mostrar los productos más calientes!!';
  // }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.productsService.getId(id);
  }

  // @Get(':id/:size')
  // findWithSize(@Param('id') id: number, @Param('size') size: string) {
  //   return `En esta ruta obtenemos el producto ${id}, pero en su tamaño ${size}`;
  // }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(@Body() body) {
    this.productsService.insert(body);
  }

  // @Get('milanesa')
  // rutaQuery(@Query() milanesa: string) {
  //   return milanesa;
  // }

  // @Get('cars')
  // carsQuery(@Query('count', ParseIntPipe) carCount: number) {
  //   return carCount;
  // }

  // @Get(':id')
  // findOne(@Res() response: Response, @Param('id') id: number) {
  //   if (id < 100) {
  //     return response.status(HttpStatus.OK).send(`Página del producto ${id}`);
  //   } else {
  //     return response.status(HttpStatus.NOT_FOUND).send(`Producto inexistente`);
  //   }
  // }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.productsService.update(id, body);
  }

  // @Patch(':id')
  // partialUpdate(@Param('id') id: number, @Body() body) {
  //   return `Actualización parcial del ítem ${id}`;
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productsService.delete(id);
  }
}
