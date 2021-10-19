import {Component, OnInit} from '@angular/core';
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-car-workshop',
  templateUrl: './car-workshop.component.html',
  styleUrls: ['./car-workshop.component.css']
})
export class CarWorkshopComponent implements OnInit {
  carWorkshops: CarWorkshopResponse[] | null = [];

  constructor(private carWorkshopService: CarWorkshopService) {
  }

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
}
