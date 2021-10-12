import {Component, OnInit} from '@angular/core';
import {CompanyResponse} from "../../shared/models/company-response";
import {CompanyService} from "../../shared/services/company.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: CompanyResponse[] | null;

  constructor(private companyService: CompanyService) {
  }

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
}
