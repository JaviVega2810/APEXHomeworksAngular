import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderInjectableRoutingModule } from './provider-injectable-routing.module';
import { ProviderInjectableComponent } from '../components/provider-injectable/provider-injectable.component';
import { RandomService } from '../services/random.service';



@NgModule({
  declarations: [
    ProviderInjectableComponent
  ],
  imports: [
    CommonModule,
    ProviderInjectableRoutingModule
  ],
  exports: [
    ProviderInjectableComponent
  ],
  providers: [
    RandomService
  ]
})
export class ProviderInjectableModule { }
