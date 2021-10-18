import {Component, OnInit, ViewChild} from '@angular/core';
import {FleetCardResponse} from "../../shared/models/fleet-card-response";
import {FleetCardService} from "../../shared/services/fleet-card.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateFleetCardRequest} from "../../shared/models/create-fleet-card-request";
import {CarService} from "../../shared/services/car.service";
import {CarResponse} from "../../shared/models/car-response";

@Component({
  selector: 'app-fleet-card',
  templateUrl: './fleet-card.component.html',
  styleUrls: ['./fleet-card.component.css']
})
export class FleetCardComponent implements OnInit {
  fleetCards: FleetCardResponse[] | null = [];
  newFleetCard: CreateFleetCardRequest = new CreateFleetCardRequest();
  cars: CarResponse[] | null = [];

  constructor(private fleetCardService: FleetCardService,
              private carService: CarService) {
  }

  @ViewChild('addFleetCardForm', {static: false}) addFleetCard: NgForm;

  ngOnInit(): void {
    this.getFleetCards();
  }

  getFleetCards(): void {
    this.fleetCardService.getFleetCards().subscribe(
      (response: HttpResponse<FleetCardResponse[]>) => {
        this.fleetCards = response.body;
        console.log('getFleetCards -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddFleetCard(form: NgForm): void {
    this.fleetCardService.postFleetCard(this.newFleetCard).subscribe(
      (response: HttpResponse<FleetCardResponse>) => {
        console.log(response.body);
        alert('postFleetCard -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddFleetCardModal')?.click();
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
}
