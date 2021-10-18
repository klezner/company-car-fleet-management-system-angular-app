import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FleetCardComponent} from './fleet-card.component';

describe('FleetCardComponent', () => {
  let component: FleetCardComponent;
  let fixture: ComponentFixture<FleetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FleetCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
