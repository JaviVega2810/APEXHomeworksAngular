import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstRoutingModule } from './my-first-module-routing';
import { MyFirstComponent } from '../components/my-first-component/my-first-component';


@NgModule({
  declarations: [
    MyFirstComponent
  ],
  exports: [
    MyFirstComponent
  ],
  imports: [
    CommonModule,
    MyFirstRoutingModule
  ]
})
export class MyFirstModule { }
