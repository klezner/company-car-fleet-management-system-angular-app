import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyResponse} from "../models/company-response";
import {CreateCompanyRequest} from "../models/create-company-request";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiServerUrl = environment.localApiUrl;
  private companyPath = 'company';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<HttpResponse<CompanyResponse[]>> {
    return this.http.get<CompanyResponse[]>(`${this.apiServerUrl}/${this.companyPath}`, {observe: 'response'});
  }

  postCompany(newCompany: CreateCompanyRequest): Observable<HttpResponse<CompanyResponse>> {
    return this.http.post<CompanyResponse>(`${this.apiServerUrl}/${this.companyPath}`, newCompany, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
