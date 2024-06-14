import { HardCodeProductsService } from './../../services/hard-code-products.service';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  public constructor(private readonly products: HardCodeProductsService){}

  private subscription!: Subscription;

  public items: Product[] = this.products.getItems();

  public photos: any;

  public currentPage: number = 1;

  ngOnInit(): void {

    this.subscription = this.products.getPhotos().subscribe({
                                                              error: (error: Error): void => {
                                                                console.log(error);
                                                                this.photos = [];
                                                              },
                                                              next: (photos: any): void => {
                                                                this.photos = photos;
                                                              }
                                                            });

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
