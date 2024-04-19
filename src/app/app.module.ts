import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootInjectableComponent } from './components/root-injectable/root-injectable.component';
import { ProviderInjectableModule } from './provider-injectable-module/provider-injectable.module';
import { RootInjectableModule } from './root-injectable/root-injectable.module';

@NgModule({
  declarations: [
    AppComponent,
    RootInjectableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProviderInjectableModule,
    RootInjectableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
