import {Component, OnInit} from '@angular/core';
import {EmployeeResponse} from "../../shared/models/employee-response";
import {EmployeeService} from "../../shared/services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: EmployeeResponse | null;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      (response: HttpResponse<EmployeeResponse>) => {
        this.employee = response.body;
        console.log('getEmployee -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
