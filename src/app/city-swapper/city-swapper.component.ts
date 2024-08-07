import { Component } from '@angular/core';

@Component({
  selector: 'app-city-swapper',
  templateUrl: './city-swapper.component.html',
  styleUrls: ['./city-swapper.component.scss']
})
export class CitySwapperComponent {
  cities: string[] = ['London', 'New York', 'Paris', 'Tokyo', 'Sydney'];
  city1: string = this.cities[0];
  city2: string = this.cities[1];

  swapCities(): void {
    const temp = this.city1;
    this.city1 = this.city2;
    this.city2 = temp;
  }
}
