import {Component, OnInit, ViewChild} from '@angular/core';
import {CompanyResponse} from "../../shared/models/company-response";
import {CompanyService} from "../../shared/services/company.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CreateCompanyRequest} from "../../shared/models/create-company-request";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CompanyResponse[] | null = [];
  newCompany: CreateCompanyRequest = new CreateCompanyRequest();

  constructor(private companyService: CompanyService) {
  }

  @ViewChild('addCompanyForm', {static: false}) addCompany: NgForm;

  ngOnInit(): void {
    this.getCompanies();
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

  onAddCompany(form: NgForm): void {
    this.companyService.postCompany(this.newCompany).subscribe(
      (response: HttpResponse<CompanyResponse>) => {
        console.log(response.body);
        alert('postCompany -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddCompanyModal')?.click();
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
}
