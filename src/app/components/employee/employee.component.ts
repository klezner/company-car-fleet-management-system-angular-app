import {Component, OnInit} from '@angular/core';
import {EmployeeResponse} from "../../shared/models/employee-response";
import {EmployeeService} from "../../shared/services/employee.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: EmployeeResponse[] | null = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: HttpResponse<EmployeeResponse[]>) => {
        this.employees = response.body;
        console.log('getEmployees -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
