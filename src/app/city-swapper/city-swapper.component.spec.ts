import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySwapperComponent } from './city-swapper.component';

describe('CitySwapperComponent', () => {
  let component: CitySwapperComponent;
  let fixture: ComponentFixture<CitySwapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySwapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySwapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
