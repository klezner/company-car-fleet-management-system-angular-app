import {Component, OnInit} from '@angular/core';
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: TripResponse[] | null = [];

  constructor(private tripService: TripService) {
  }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips().subscribe(
      (response: HttpResponse<TripResponse[]>) => {
        this.trips = response.body;
        console.log('getTrips -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
