import {Component, OnInit} from '@angular/core';
import {CarResponse} from "../../shared/models/car-response";
import {CarService} from "../../shared/services/car.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  id: number;
  car: CarResponse | null;

  constructor(private carService: CarService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCar(this.id).subscribe(
      (response: HttpResponse<CarResponse>) => {
        this.car = response.body;
        console.log('getCar -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
