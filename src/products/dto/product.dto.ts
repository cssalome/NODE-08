import { IsInt, IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  stock: number;
}
