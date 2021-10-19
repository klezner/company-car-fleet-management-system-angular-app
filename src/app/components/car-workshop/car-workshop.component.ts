import {Component, OnInit, ViewChild} from '@angular/core';
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateCarWorkshopRequest} from "../../shared/models/create-car-workshop-request";

@Component({
  selector: 'app-car-workshop',
  templateUrl: './car-workshop.component.html',
  styleUrls: ['./car-workshop.component.css']
})
export class CarWorkshopComponent implements OnInit {
  carWorkshops: CarWorkshopResponse[] | null = [];
  newCarWorkshop: CreateCarWorkshopRequest = new CreateCarWorkshopRequest();

  constructor(private carWorkshopService: CarWorkshopService) {
  }

  @ViewChild('addCarWorkshopForm', {static: false}) addCarWorkshopForm: NgForm;

  ngOnInit(): void {
    this.getCarWorkshops();
  }

  getCarWorkshops(): void {
    this.carWorkshopService.getCarWorkshops().subscribe(
      (response: HttpResponse<CarWorkshopResponse[]>) => {
        this.carWorkshops = response.body;
        console.log('getCarWorkshops -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddCarWorkshop(form: NgForm): void {
    this.carWorkshopService.postCarWorkshop(this.newCarWorkshop).subscribe(
      (response: HttpResponse<CarWorkshopResponse>) => {
        console.log(response.body);
        alert('postCarWorkshop -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddCarWorkshopModal')?.click();
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
}
