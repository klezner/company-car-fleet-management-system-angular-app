import {Component, OnInit} from '@angular/core';
import {RefuelingResponse} from "../../shared/models/refueling-response";
import {RefuelingService} from "../../shared/services/refueling.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-refueling-details',
  templateUrl: './refueling-details.component.html',
  styleUrls: ['./refueling-details.component.css']
})
export class RefuelingDetailsComponent implements OnInit {
  id: number;
  refueling: RefuelingResponse | null;

  constructor(private refuelingService: RefuelingService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.refuelingService.getRefueling(this.id).subscribe(
      (response: HttpResponse<RefuelingResponse>) => {
        this.refueling = response.body;
        console.log('getRefueling -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
