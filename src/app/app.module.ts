import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeCapitalizePipe } from './pipes/custom-pipe-capitalize.pipe';
import { PipesExcerciseComponent } from './components/pipes-excercise/pipes-excercise.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeCapitalizePipe,
    PipesExcerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
