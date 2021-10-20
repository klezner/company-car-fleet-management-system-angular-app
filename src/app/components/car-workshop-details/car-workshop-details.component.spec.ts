import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarWorkshopDetailsComponent} from './car-workshop-details.component';

describe('CarWorkshopDetailsComponent', () => {
  let component: CarWorkshopDetailsComponent;
  let fixture: ComponentFixture<CarWorkshopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarWorkshopDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWorkshopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
