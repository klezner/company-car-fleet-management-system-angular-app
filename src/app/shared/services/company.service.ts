import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyResponse} from "../models/company-response";

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
}
