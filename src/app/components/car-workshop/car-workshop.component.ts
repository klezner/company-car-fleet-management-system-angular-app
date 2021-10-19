import {Component, OnInit, ViewChild} from '@angular/core';
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateCarWorkshopRequest} from "../../shared/models/create-car-workshop-request";
import {UpdateCarWorkshopRequest} from "../../shared/models/update-car-workshop-request";

@Component({
  selector: 'app-car-workshop',
  templateUrl: './car-workshop.component.html',
  styleUrls: ['./car-workshop.component.css']
})
export class CarWorkshopComponent implements OnInit {
  carWorkshops: CarWorkshopResponse[] | null = [];
  newCarWorkshop: CreateCarWorkshopRequest = new CreateCarWorkshopRequest();
  editedCarWorkshop: UpdateCarWorkshopRequest = new UpdateCarWorkshopRequest();

  constructor(private carWorkshopService: CarWorkshopService) {
  }

  @ViewChild('addCarWorkshopForm', {static: false}) addCarWorkshopForm: NgForm;
  @ViewChild('editCarWorkshopForm', {static: false}) editCarWorkshopForm: NgForm;

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

  onUpdateCarWorkshop(form: NgForm): void {
    this.carWorkshopService.editCarWorkshop(this.editedCarWorkshop).subscribe(
      (response: HttpResponse<CarWorkshopResponse>) => {
        console.log(response.body);
        alert('editCarWorkshop -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditCarWorkshopModal')?.click();
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

  onSelectCarWorkshopIdToEdit(editedCarWorkshopId: number): void {
    this.carWorkshopService.getCarWorkshop(editedCarWorkshopId).subscribe(
      (response: HttpResponse<CarWorkshopResponse>) => {
        this.editedCarWorkshop.id = response.body?.id;
        this.editedCarWorkshop.name = response.body?.name;
        this.editedCarWorkshop.zipCode = response.body?.zipCode;
        this.editedCarWorkshop.city = response.body?.city;
        this.editedCarWorkshop.street = response.body?.street;
        this.editedCarWorkshop.number = response.body?.number;
        console.log('getCarWorkshop -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
