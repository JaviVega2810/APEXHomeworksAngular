import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'module-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'module-b',
    loadChildren: () => import('./modules/module-b/module-b.module').then(m => m.ModuleBModule)
  },
  {
    path: 'module-z',
    loadChildren: () => import('./modules/module-z/module-z.module').then(m => m.ModuleZModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
