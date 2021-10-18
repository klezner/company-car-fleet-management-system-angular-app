import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FleetCardDetailsComponent} from './fleet-card-details.component';

describe('FleetCardDetailsComponent', () => {
  let component: FleetCardDetailsComponent;
  let fixture: ComponentFixture<FleetCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleetCardDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
