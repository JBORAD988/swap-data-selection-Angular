import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CitySwapperComponent} from "./city-swapper/city-swapper.component";

const routes: Routes = [
  {path:'', component: CitySwapperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
