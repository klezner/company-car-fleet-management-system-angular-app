import {Component, OnInit} from '@angular/core';
import {CarService} from "../../shared/services/car.service";
import {CarResponse} from "../../shared/models/car-response";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CreateCarRequest} from "../../shared/models/create-car-request";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarResponse[] | null = [];

  newCar: CreateCarRequest = new CreateCarRequest();

  newCarForm = new FormGroup({
    brand: new FormControl(null, Validators.required),
    model: new FormControl(null, Validators.required),
    registrationNumber: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    vinNumber: new FormControl(null, [Validators.required, Validators.minLength(17), Validators.maxLength(17)]),
    productionYear: new FormControl(null, [Validators.required, Validators.min(2000), Validators.max(2050)])
  })

  constructor(private router: Router,
              private carService: CarService) {
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(
      (response: HttpResponse<CarResponse[]>) => {
        this.cars = response.body;
        console.log('getCars -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  addCar(): void {
    this.newCar.brand = this.newCarForm.value.brand;
    this.newCar.model = this.newCarForm.value.model;
    this.newCar.registrationNumber = this.newCarForm.value.registrationNumber;
    this.newCar.vinNumber = this.newCarForm.value.vinNumber;
    this.newCar.productionYear = this.newCarForm.value.productionYear;

    this.carService.postCar(this.newCar).subscribe(
      (response: HttpResponse<CarResponse>) => {
        console.log(response.body);
        alert('postCar -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.clearForm();
        document.getElementById('closeAddCarModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  clearForm(): void {
    this.newCarForm.reset();
  }
}
