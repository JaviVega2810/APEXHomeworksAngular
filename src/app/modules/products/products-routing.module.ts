import { PaginationComponent } from './../../components/products/pagination/pagination.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../components/products/products.component';
import { SingleComponent } from '../../components/products/single/single.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'item/:id', component: SingleComponent },
  { path: 'paginator', component: PaginationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
