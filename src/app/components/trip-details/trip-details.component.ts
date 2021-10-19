import {Component, OnInit} from '@angular/core';
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  id: number;
  trip: TripResponse | null;

  constructor(private tripService: TripService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tripService.getTrip(this.id).subscribe(
      (response: HttpResponse<TripResponse>) => {
        this.trip = response.body;
        console.log('geTrip -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
