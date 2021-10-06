import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from "../../shared/services/car.service";
import {CarResponse} from "../../shared/models/car-response";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CreateCarRequest} from "../../shared/models/create-car-request";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarResponse[] | null;
  newCar: CreateCarRequest = new CreateCarRequest();

  // editedCar: UpdateCarRequest = new UpdateCarRequest();

  constructor(private router: Router,
              private carService: CarService) {
  }

  @ViewChild('addCarForm', {static: false}) addCarForm: NgForm;

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

  onAddCar(form: NgForm): void {
    this.carService.postCar(this.newCar).subscribe(
      (response: HttpResponse<CarResponse>) => {
        console.log(response.body);
        alert('postCar -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddCarModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onClear(form: NgForm): void {
    form.reset();
  }
}
