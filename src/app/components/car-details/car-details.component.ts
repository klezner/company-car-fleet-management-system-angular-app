import {Component, OnInit} from '@angular/core';
import {CarResponse} from "../../shared/models/car-response";
import {CarService} from "../../shared/services/car.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  id: number;
  car: CarResponse | null;
  trips: TripResponse[] | null = [];

  constructor(private carService: CarService,
              private route: ActivatedRoute,
              private tripService: TripService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCarDetails(this.id);
    this.getTripsByCarId(this.id);
  }

  private getCarDetails(id: number): void {
    this.carService.getCar(this.id).subscribe(
      (response: HttpResponse<CarResponse>) => {
        this.car = response.body;
        console.log('getCar -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getTripsByCarId(id: number): void {
    this.tripService.getTripsByCarId(id).subscribe(
      (response: HttpResponse<TripResponse[]>) => {
        this.trips = response.body;
        console.log('getTripsByCarId -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
