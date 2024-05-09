import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardCodeProductsService } from '../../../services/hard-code-products.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent {

  public param: string = ''
  public item!: Product;

  public constructor(
                     private route: ActivatedRoute,
                     private readonly productsService: HardCodeProductsService
                    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
    this. item = this.productsService.getItemById(this.param);
  }

}
