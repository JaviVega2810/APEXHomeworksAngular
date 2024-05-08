import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../../components/products/products.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SingleComponent } from '../../components/products/single/single.component';


@NgModule({
  declarations: [
    ProductsComponent,
    SingleComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [provideAnimationsAsync()]
})
export class ProductsModule { }
