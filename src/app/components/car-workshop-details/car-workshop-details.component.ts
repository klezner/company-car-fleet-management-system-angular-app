import {Component, OnInit} from '@angular/core';
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-car-workshop-details',
  templateUrl: './car-workshop-details.component.html',
  styleUrls: ['./car-workshop-details.component.css']
})
export class CarWorkshopDetailsComponent implements OnInit {
  id: number;
  carWorkshop: CarWorkshopResponse | null;

  constructor(private carWorkshopService: CarWorkshopService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carWorkshopService.getCarWorkshop(this.id).subscribe(
      (response: HttpResponse<CarWorkshopResponse>) => {
        this.carWorkshop = response.body;
        console.log('getCarWorkshop -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
