import {Component, OnInit} from '@angular/core';
import {CompanyResponse} from "../../shared/models/company-response";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../../shared/services/company.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {DepartmentService} from "../../shared/services/department.service";
import {DepartmentResponse} from "../../shared/models/department-response";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  id: number;
  company: CompanyResponse | null;
  departments: DepartmentResponse[] | null = [];

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCompanyDetails(this.id);
    this.getDepartmentsByCompanyId(this.id);
  }

  getCompanyDetails(id: number): void {
    this.companyService.getCompany(id).subscribe(
      (response: HttpResponse<CompanyResponse>) => {
        this.company = response.body;
        console.log('getCompany -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getDepartmentsByCompanyId(id: number): void {
    this.departmentService.getDepartmentsByCompanyId(id).subscribe(
      (response: HttpResponse<DepartmentResponse[]>) => {
        this.departments = response.body;
        console.log('getDepartmentsByCompanyId -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
