import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitySwapperComponent} from "./city-swapper/city-swapper.component";
import { CitySwapperReactiveComponent } from './city-swapper-reactive/city-swapper-reactive.component';

const routes: Routes = [
  {path:'normal', component: CitySwapperComponent},
  {path:'', component: CitySwapperReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
