import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarWorkshopComponent} from './car-workshop.component';

describe('CarWorkshopComponent', () => {
  let component: CarWorkshopComponent;
  let fixture: ComponentFixture<CarWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarWorkshopComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
