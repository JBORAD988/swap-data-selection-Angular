import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySwapperComponent } from './city-swapper/city-swapper.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CitySwapperReactiveComponent } from './city-swapper-reactive/city-swapper-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySwapperComponent,
    CitySwapperReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
