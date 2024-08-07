import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySwapperReactiveComponent } from './city-swapper-reactive.component';

describe('CitySwapperReactiveComponent', () => {
  let component: CitySwapperReactiveComponent;
  let fixture: ComponentFixture<CitySwapperReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySwapperReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySwapperReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
