import {Component, OnInit, ViewChild} from '@angular/core';
import {DepartmentResponse} from "../../shared/models/department-response";
import {DepartmentService} from "../../shared/services/department.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CreateDepartmentRequest} from "../../shared/models/create-department-request";
import {NgForm} from "@angular/forms";
import {CompanyResponse} from "../../shared/models/company-response";
import {CompanyService} from "../../shared/services/company.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: DepartmentResponse[] | null = [];
  newDepartment: CreateDepartmentRequest = new CreateDepartmentRequest();
  companies: CompanyResponse[] | null = [];

  constructor(private departmentService: DepartmentService,
              private companyService: CompanyService) {
  }

  @ViewChild('addDepartmentForm', {static: false}) addDepartment: NgForm;

  ngOnInit(): void {
    this.getDepartments()
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
    );
  }

  onAddDepartment(form: NgForm): void {
    this.departmentService.postDepartment(this.newDepartment).subscribe(
      (response: HttpResponse<DepartmentResponse>) => {
        console.log(response.body);
        alert('postDepartment -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddDepartmentModal')?.click();
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

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (response: HttpResponse<CompanyResponse[]>) => {
        this.companies = response.body;
        console.log('getCompanies -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
