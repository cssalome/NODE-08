import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CustomersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
