import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeResponse} from "../../shared/models/employee-response";
import {EmployeeService} from "../../shared/services/employee.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CreateEmployeeRequest} from "../../shared/models/create-employee-request";
import {DepartmentResponse} from "../../shared/models/department-response";
import {DepartmentService} from "../../shared/services/department.service";
import {UpdateEmployeeRequest} from "../../shared/models/update-employee-request";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: EmployeeResponse[] | null = [];
  newEmployee: CreateEmployeeRequest = new CreateEmployeeRequest();
  departments: DepartmentResponse[] | null = [];
  editedEmployee: UpdateEmployeeRequest = new UpdateEmployeeRequest();

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService) {
  }

  @ViewChild('addEmployeeForm', {static: false}) addEmployee: NgForm;
  @ViewChild('editEmployeeForm', {static: false}) editEmployee: NgForm;

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

  onAddEmployee(form: NgForm): void {
    this.employeeService.postEmployee(this.newEmployee).subscribe(
      (response: HttpResponse<EmployeeResponse>) => {
        console.log(response.body);
        alert('postEmployee -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddEmployeeModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateEmployee(form: NgForm): void {
    this.employeeService.editEmployee(this.editedEmployee).subscribe(
      (response: HttpResponse<EmployeeResponse>) => {
        console.log(response.body);
        alert('editEmployee -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditEmployeeModal')?.click();
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

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: HttpResponse<DepartmentResponse[]>) => {
        this.departments = response.body;
        console.log('getDepartments -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onSelectEmployeeIdToEdit(editedEmployeeId: number): void {
    this.employeeService.getEmployee(editedEmployeeId).subscribe(
      (response: HttpResponse<EmployeeResponse>) => {
        this.editedEmployee.id = response.body?.id;
        this.editedEmployee.firstName = response.body?.firstName;
        this.editedEmployee.lastName = response.body?.lastName;
        this.editedEmployee.departmentId = response.body?.department.id;
        console.log('getEmployee -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
