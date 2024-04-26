import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { B1Component } from '../../components/b1/b1.component';
import { B2Component } from '../../components/b2/b2.component';
import { B3Component } from '../../components/b3/b3.component';


@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  exports: [
    B2Component
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
