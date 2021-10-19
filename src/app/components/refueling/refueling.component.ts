import {Component, OnInit, ViewChild} from '@angular/core';
import {RefuelingResponse} from "../../shared/models/refueling-response";
import {RefuelingService} from "../../shared/services/refueling.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateRefuelingRequest} from "../../shared/models/create-refueling-request";
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";
import {UpdateRefuelingRequest} from "../../shared/models/update-refueling-request";

@Component({
  selector: 'app-refueling',
  templateUrl: './refueling.component.html',
  styleUrls: ['./refueling.component.css']
})
export class RefuelingComponent implements OnInit {
  refuelings: RefuelingResponse[] | null = [];
  newRefueling: CreateRefuelingRequest = new CreateRefuelingRequest();
  trips: TripResponse[] | null = [];
  editedRefueling: UpdateRefuelingRequest = new UpdateRefuelingRequest();

  constructor(private refuelingService: RefuelingService,
              private tripService: TripService) {
  }

  @ViewChild('addRefuelingForm', {static: false}) addRefueling: NgForm;
  @ViewChild('editRefuelingForm', {static: false}) editRefueling: NgForm;

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

  onUpdateRefueling(form: NgForm): void {
    this.refuelingService.editRefueling(this.editedRefueling).subscribe(
      (response: HttpResponse<RefuelingResponse>) => {
        console.log(response.body);
        alert('editRefueling -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditRefuelingModal')?.click();
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

  onSelectRefuelingIdToEdit(editedRefuelingId: number): void {
    this.refuelingService.getRefueling(editedRefuelingId).subscribe(
      (response: HttpResponse<RefuelingResponse>) => {
        this.editedRefueling.id = response.body?.id;
        this.editedRefueling.date = response.body?.date;
        this.editedRefueling.meterStatus = response.body?.meterStatus;
        this.editedRefueling.fuelAmount = response.body?.fuelAmount;
        this.editedRefueling.refuelingCost = response.body?.refuelingCost;
        this.editedRefueling.tripId = response.body?.trip?.id;
        console.log('getRefueling -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
