import {Component, OnInit} from '@angular/core';
import {CompanyResponse} from "../../shared/models/company-response";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../../shared/services/company.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  id: number;
  company: CompanyResponse | null;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.companyService.getCompany(this.id).subscribe(
      (response: HttpResponse<CompanyResponse>) => {
        this.company = response.body;
        console.log('getCompany -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
