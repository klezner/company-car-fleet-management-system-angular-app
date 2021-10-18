import {Component, OnInit} from '@angular/core';
import {FleetCardResponse} from "../../shared/models/fleet-card-response";
import {FleetCardService} from "../../shared/services/fleet-card.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-fleet-card',
  templateUrl: './fleet-card.component.html',
  styleUrls: ['./fleet-card.component.css']
})
export class FleetCardComponent implements OnInit {
  fleetCards: FleetCardResponse[] | null = [];

  constructor(private fleetCardService: FleetCardService) {
  }

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
}
