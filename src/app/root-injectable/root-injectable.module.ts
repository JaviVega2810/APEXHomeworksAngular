import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootInjectableRoutingModule } from './root-injectable-routing.module';
import { OtherComponentComponent } from '../components/other-component/other-component.component';


@NgModule({
  declarations: [
    OtherComponentComponent
  ],
  exports: [
    OtherComponentComponent
  ],
  imports: [
    CommonModule,
    RootInjectableRoutingModule
  ]
})
export class RootInjectableModule { }
