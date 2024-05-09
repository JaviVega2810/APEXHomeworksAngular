import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootInjectableRoutingModule } from './root-injectable-routing.module';
import { OtherComponent } from '../components/other-component/other.component';


@NgModule({
  declarations: [
    OtherComponent
  ],
  exports: [
    OtherComponent
  ],
  imports: [
    CommonModule,
    RootInjectableRoutingModule
  ]
})
export class RootInjectableModule { }
