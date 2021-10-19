import {Component, OnInit, ViewChild} from '@angular/core';
import {RefuelingResponse} from "../../shared/models/refueling-response";
import {RefuelingService} from "../../shared/services/refueling.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateRefuelingRequest} from "../../shared/models/create-refueling-request";
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";

@Component({
  selector: 'app-refueling',
  templateUrl: './refueling.component.html',
  styleUrls: ['./refueling.component.css']
})
export class RefuelingComponent implements OnInit {
  refuelings: RefuelingResponse[] | null = [];
  newRefueling: CreateRefuelingRequest = new CreateRefuelingRequest();
  trips: TripResponse[] | null = [];

  constructor(private refuelingService: RefuelingService,
              private tripService: TripService) {
  }

  @ViewChild('addRefuelingForm', {static: false}) addRefueling: NgForm;

  ngOnInit(): void {
    this.getRefuelings();
  }

  getRefuelings(): void {
    this.refuelingService.getRefuelings().subscribe(
      (response: HttpResponse<RefuelingResponse[]>) => {
        this.refuelings = response.body;
        console.log('getRefuelings -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddRefueling(form: NgForm): void {
    this.refuelingService.postRefueling(this.newRefueling).subscribe(
      (response: HttpResponse<RefuelingResponse>) => {
        console.log(response.body);
        alert('postRefueling -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddRefuelingModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClear(form: NgForm): void {
    form.reset();
    form.form.markAsPristine();
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
