import {Component, OnInit, ViewChild} from '@angular/core';
import {TripResponse} from "../../shared/models/trip-response";
import {TripService} from "../../shared/services/trip.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CarResponse} from "../../shared/models/car-response";
import {CreateTripRequest} from 'src/app/shared/models/create-trip-request';
import {CarService} from "../../shared/services/car.service";
import {EmployeeService} from "../../shared/services/employee.service";
import {EmployeeResponse} from "../../shared/models/employee-response";
import {UpdateTripRequest} from "../../shared/models/update-trip-request";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: TripResponse[] | null = [];
  newTrip: CreateTripRequest = new CreateTripRequest();
  cars: CarResponse[] | null = [];
  employees: EmployeeResponse[] | null = [];
  editedTrip: UpdateTripRequest = new UpdateTripRequest();

  constructor(private tripService: TripService,
              private carService: CarService,
              private employeeService: EmployeeService) {
  }

  @ViewChild('addTripForm', {static: false}) addTrip: NgForm;
  @ViewChild('editTripForm', {static: false}) editTrip: NgForm;

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

  onAddTrip(form: NgForm): void {
    this.tripService.postTrip(this.newTrip).subscribe(
      (response: HttpResponse<TripResponse>) => {
        console.log(response.body);
        alert('postTrip -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddTripModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateTrip(form: NgForm): void {
    this.tripService.editTrip(this.editedTrip).subscribe(
      (response: HttpResponse<TripResponse>) => {
        console.log(response.body);
        alert('editTrip -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditTripModal')?.click();
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

  getCars(): void {
    this.carService.getCars().subscribe(
      (response: HttpResponse<CarResponse[]>) => {
        this.cars = response.body;
        console.log('getCars -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: HttpResponse<EmployeeResponse[]>) => {
        this.employees = response.body;
        console.log('getEmployees -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSelectTripIdToEdit(editedTripId: number): void {
    this.tripService.getTrip(editedTripId).subscribe(
      (response: HttpResponse<TripResponse>) => {
        this.editedTrip.id = response.body?.id;
        this.editedTrip.departureDate = response.body?.departureDate;
        this.editedTrip.returnDate = response.body?.returnDate;
        this.editedTrip.departureMeterStatus = response.body?.departureMeterStatus;
        this.editedTrip.returnMeterStatus = response.body?.returnMeterStatus;
        this.editedTrip.comments = response.body?.comments;
        this.editedTrip.carId = response.body?.car.id;
        this.editedTrip.employeeId = response.body?.employee.id;
        console.log('getTrip -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
