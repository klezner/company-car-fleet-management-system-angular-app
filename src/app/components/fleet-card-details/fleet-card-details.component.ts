import {Component, OnInit} from '@angular/core';
import {FleetCardResponse} from "../../shared/models/fleet-card-response";
import {FleetCardService} from "../../shared/services/fleet-card.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-fleet-card-details',
  templateUrl: './fleet-card-details.component.html',
  styleUrls: ['./fleet-card-details.component.css']
})
export class FleetCardDetailsComponent implements OnInit {
  id: number;
  fleetCard: FleetCardResponse | null;

  constructor(private fleetCardService: FleetCardService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fleetCardService.getFleetCard(this.id).subscribe(
      (response: HttpResponse<FleetCardResponse>) => {
        this.fleetCard = response.body;
        console.log('getFleetCard -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
