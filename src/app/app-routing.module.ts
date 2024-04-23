import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleRouteComponent } from './components/single-route/single-route.component';
import { SlugComponent } from './components/slug/slug.component';

const routes: Routes = [
  { path: "", component: SingleRouteComponent },
  { path: "single", component: SingleRouteComponent },
  {
    path: "lazy",
    loadChildren: () => import('./lazy-module/lazy-module.module').then( m => m.LazyModuleModule )
  },
  { path: 'slug/:slug', component: SlugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
