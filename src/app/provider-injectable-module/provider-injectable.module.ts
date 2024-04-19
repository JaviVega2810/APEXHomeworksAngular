import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderInjectableRoutingModule } from './provider-injectable-routing.module';
import { ProviderInjectableComponent } from '../components/provider-injectable/provider-injectable.component';
import { ProviderServiceService } from '../services/provider-service.service';



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
    ProviderServiceService
  ]
})
export class ProviderInjectableModule { }
