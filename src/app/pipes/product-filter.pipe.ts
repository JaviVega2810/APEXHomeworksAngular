import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], page: number): Product[] {
    return products.slice(page, page + 5);
  }
}
