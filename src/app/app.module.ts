import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleRouteComponent } from './components/single-route/single-route.component';
import { SlugComponent } from './components/slug/slug.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleRouteComponent,
    SlugComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
