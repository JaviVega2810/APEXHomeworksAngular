import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Z1Component } from '../../components/z1/z1.component';
import { Z2Component } from '../../components/z2/z2.component';
import { Z3Component } from '../../components/z3/z3.component';

const routes: Routes = [
  { path: ''  , component: Z1Component },
  { path: 'z1', component: Z1Component },
  { path: 'z2', component: Z2Component },
  { path: 'z3', component: Z3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleZRoutingModule { }
