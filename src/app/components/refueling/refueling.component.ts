import {Component, OnInit} from '@angular/core';
import {RefuelingResponse} from "../../shared/models/refueling-response";
import {RefuelingService} from "../../shared/services/refueling.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-refueling',
  templateUrl: './refueling.component.html',
  styleUrls: ['./refueling.component.css']
})
export class RefuelingComponent implements OnInit {
  refuelings: RefuelingResponse[] | null = [];

  constructor(private refuelingService: RefuelingService) {
  }

  ngOnInit(): void {
    this.getRefuelings();
  }

  getRefuelings(): void {
    this.refuelingService.getRefuelings().subscribe(
      (response: HttpResponse<RefuelingResponse[]>) => {
        this.refuelings = response.body;
        console.log('getRefuelings -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
