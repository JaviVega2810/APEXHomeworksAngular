import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../../components/products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PaginationComponent } from '../../components/products/pagination/pagination.component';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';
import { SingleComponent } from '../../components/products/single/single.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RoundPricePipe } from '../../pipes/round-price.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    PaginationComponent,
    ProductFilterPipe,
    RoundPricePipe,
    SingleComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatButtonModule
  ],
  providers: [provideAnimationsAsync()]
})
export class ProductsModule { }
