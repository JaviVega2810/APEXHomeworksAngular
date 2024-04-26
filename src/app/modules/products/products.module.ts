import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../../components/products/products.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule
  ],
  providers: [provideAnimationsAsync()]
})
export class ProductsModule { }
