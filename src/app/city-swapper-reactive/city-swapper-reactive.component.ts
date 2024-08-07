import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-city-swapper-reactive',
  templateUrl: './city-swapper-reactive.component.html',
  styleUrls: ['./city-swapper-reactive.component.scss']
})
export class CitySwapperReactiveComponent implements OnInit {
  cities: string[] = ['London', 'New York', 'Paris', 'Tokyo', 'Sydney'];
  cityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cityForm = this.fb.group({
      city1: [this.cities[0]],
      city2: [this.cities[1]]
    });
  }

  ngOnInit(): void {}

  swapCities(): void {
    const temp = this.cityForm.get('city1')?.value;
    this.cityForm.patchValue({
      city1: this.cityForm.get('city2')?.value,
      city2: temp
    });
  }
}
