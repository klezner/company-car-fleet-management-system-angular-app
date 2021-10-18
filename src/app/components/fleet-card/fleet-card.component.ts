import {Component, OnInit, ViewChild} from '@angular/core';
import {FleetCardResponse} from "../../shared/models/fleet-card-response";
import {FleetCardService} from "../../shared/services/fleet-card.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateFleetCardRequest} from "../../shared/models/create-fleet-card-request";
import {CarService} from "../../shared/services/car.service";
import {CarResponse} from "../../shared/models/car-response";
import {UpdateFleetCardRequest} from "../../shared/models/update-fleet-card-request";

@Component({
  selector: 'app-fleet-card',
  templateUrl: './fleet-card.component.html',
  styleUrls: ['./fleet-card.component.css']
})
export class FleetCardComponent implements OnInit {
  fleetCards: FleetCardResponse[] | null = [];
  newFleetCard: CreateFleetCardRequest = new CreateFleetCardRequest();
  cars: CarResponse[] | null = [];
  editedFleetCard: UpdateFleetCardRequest = new UpdateFleetCardRequest();

  constructor(private fleetCardService: FleetCardService,
              private carService: CarService) {
  }

  @ViewChild('addFleetCardForm', {static: false}) addFleetCard: NgForm;
  @ViewChild('editFleetCardForm', {static: false}) editFleetCard: NgForm;

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

  onUpdateFleetCard(form: NgForm): void {
    this.fleetCardService.editFleetCard(this.editedFleetCard).subscribe(
      (response: HttpResponse<FleetCardResponse>) => {
        console.log(response.body);
        alert('editFleetCard -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditFleetCardModal')?.click();
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

  onSelectFleetCardIdToEdit(editedFleetCardId: number): void {
    this.fleetCardService.getFleetCard(editedFleetCardId).subscribe(
      (response: HttpResponse<FleetCardResponse>) => {
        this.editedFleetCard.id = response.body?.id;
        this.editedFleetCard.number = response.body?.number;
        this.editedFleetCard.expirationDate = response.body?.expirationDate;
        this.editedFleetCard.type = response.body?.type;
        this.editedFleetCard.carId = response.body?.car.id;
        console.log('getFleetCard -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
