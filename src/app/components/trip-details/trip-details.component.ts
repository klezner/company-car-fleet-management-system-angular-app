import {Component, OnInit} from '@angular/core';
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {RepairResponse} from "../../shared/models/repair-response";
import {RepairService} from "../../shared/services/repair.service";
import {RefuelingService} from "../../shared/services/refueling.service";
import {RefuelingResponse} from "../../shared/models/refueling-response";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  id: number;
  trip: TripResponse | null;
  repairs: RepairResponse[] | null = [];
  refuelings: RefuelingResponse[] | null = [];

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private repairService: RepairService,
              private refuelingService: RefuelingService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTripDetails(this.id);
    this.getRepairsByTripId(this.id);
    this.getRefuelingsByTripId(this.id);
  }

  private getTripDetails(id: number): void {
    this.tripService.getTrip(id).subscribe(
      (response: HttpResponse<TripResponse>) => {
        this.trip = response.body;
        console.log('geTrip -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getRepairsByTripId(id: number): void {
    this.repairService.getRepairsByTripId(id).subscribe(
      (response: HttpResponse<RepairResponse[]>) => {
        this.repairs = response.body;
        console.log('getRepairsByTripId -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getRefuelingsByTripId(id: number): void {
    this.refuelingService.getRefuelingsByTripId(id).subscribe(
      (response: HttpResponse<RefuelingResponse[]>) => {
        this.refuelings = response.body;
        console.log('getRefuelingsByTripId -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
