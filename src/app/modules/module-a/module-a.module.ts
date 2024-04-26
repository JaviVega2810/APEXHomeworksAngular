import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { LazyModule } from '../lazy/lazy.module';
import { ModuleZModule } from '../module-z/module-z.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    LazyModule,
    ModuleZModule
  ]
})
export class ModuleAModule { }
