import {Component, OnInit, ViewChild} from '@angular/core';
import {CompanyResponse} from "../../shared/models/company-response";
import {CompanyService} from "../../shared/services/company.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CreateCompanyRequest} from "../../shared/models/create-company-request";
import {NgForm} from "@angular/forms";
import {UpdateCompanyRequest} from "../../shared/models/update-company-request";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CompanyResponse[] | null = [];
  newCompany: CreateCompanyRequest = new CreateCompanyRequest();
  editedCompany: UpdateCompanyRequest = new UpdateCompanyRequest();

  constructor(private companyService: CompanyService) {
  }

  @ViewChild('addCompanyForm', {static: false}) addCompany: NgForm;
  @ViewChild('editCompanyForm', {static: false}) editCompany: NgForm;

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

  onUpdateCompany(form: NgForm): void {
    this.companyService.editCompany(this.editedCompany).subscribe(
      (response: HttpResponse<CompanyResponse>) => {
        console.log(response.body);
        alert('editCompany -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditCompanyModal')?.click();
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

  onSelectedCompanyIdToEdit(editedCompanyId: number): void {
    this.companyService.getCompany(editedCompanyId).subscribe(
      (response: HttpResponse<CompanyResponse>) => {
        this.editedCompany.id = response.body?.id;
        this.editedCompany.name = response.body?.name;
        console.log('getCompany -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
