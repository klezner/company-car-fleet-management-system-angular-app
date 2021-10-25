import {Component, OnInit} from '@angular/core';
import {DepartmentResponse} from "../../shared/models/department-response";
import {DepartmentService} from "../../shared/services/department.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {EmployeeResponse} from "../../shared/models/employee-response";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  id: number;
  department: DepartmentResponse | null;
  employees: EmployeeResponse[] | null = [];

  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDepartmentDetails(this.id);
    this.getEmployeesByDepartmentId(this.id);
  }

  private getDepartmentDetails(id: number): void {
    this.departmentService.getDepartment(this.id).subscribe(
      (response: HttpResponse<DepartmentResponse>) => {
        this.department = response.body;
        console.log('getDepartment -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private getEmployeesByDepartmentId(id: number): void {
    this.employeeService.getEmployeeByDepartmentId(id).subscribe(
      (response: HttpResponse<EmployeeResponse[]>) => {
        this.employees = response.body;
        console.log('getEmployeesByDepartmentId -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
