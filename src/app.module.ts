import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ProductsModule, TagsModule],
  controllers: [
    AppController,
    ProductsController,
    CustomersController,
    UsersController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
