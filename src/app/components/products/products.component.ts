import { Component } from '@angular/core';
import { HardCodeProductsService } from '../../services/hard-code-products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public constructor(private readonly products: HardCodeProductsService){}

  public items: Product[] = this.products.getItems();



}
