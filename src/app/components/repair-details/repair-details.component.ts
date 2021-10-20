import {Component, OnInit} from '@angular/core';
import {RepairResponse} from "../../shared/models/repair-response";
import {RepairService} from "../../shared/services/repair.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.css']
})
export class RepairDetailsComponent implements OnInit {
  id: number;
  repair: RepairResponse | null;

  constructor(private repairService: RepairService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.repairService.getRepair(this.id).subscribe(
      (response: HttpResponse<RepairResponse>) => {
        this.repair = response.body;
        console.log('geTrip -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
