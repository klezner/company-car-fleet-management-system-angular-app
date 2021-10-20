import {Component, OnInit} from '@angular/core';
import {RepairResponse} from "../../shared/models/repair-response";
import {RepairService} from "../../shared/services/repair.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
  repairs: RepairResponse[] | null = [];

  constructor(private repairService: RepairService) {
  }

  ngOnInit(): void {
    this.getRepairs();
  }

  getRepairs(): void {
    this.repairService.getRepairs().subscribe(
      (response: HttpResponse<RepairResponse[]>) => {
        this.repairs = response.body;
        console.log('getRepairs -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
