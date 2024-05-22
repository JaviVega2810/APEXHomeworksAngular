import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], page: number, pageSize: number = 5): Product[] {
    return products.slice((page - 1) * pageSize, page * 5);
  }
}
