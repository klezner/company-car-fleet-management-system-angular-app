import {Component, OnInit} from '@angular/core';
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {RepairResponse} from "../../shared/models/repair-response";
import {RepairService} from "../../shared/services/repair.service";

@Component({
  selector: 'app-car-workshop-details',
  templateUrl: './car-workshop-details.component.html',
  styleUrls: ['./car-workshop-details.component.css']
})
export class CarWorkshopDetailsComponent implements OnInit {
  id: number;
  carWorkshop: CarWorkshopResponse | null;
  repairs: RepairResponse[] | null = [];

  constructor(private carWorkshopService: CarWorkshopService,
              private route: ActivatedRoute,
              private repairService: RepairService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCarWorkshopDetails(this.id);
    this.getRepairsByCarWorkshopId(this.id);
  }

  getCarWorkshopDetails(id: number): void {
    this.carWorkshopService.getCarWorkshop(id).subscribe(
      (response: HttpResponse<CarWorkshopResponse>) => {
        this.carWorkshop = response.body;
        console.log('getCarWorkshop -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getRepairsByCarWorkshopId(id: number): void {
    this.repairService.getRepairsByCarWorkshopId(id).subscribe(
      (response: HttpResponse<RepairResponse[]>) => {
        this.repairs = response.body;
        console.log('getRepairsByCarWorkshopId -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
