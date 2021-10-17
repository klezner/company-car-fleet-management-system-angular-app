import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeResponse} from "../models/employee-response";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.localApiUrl;
  private employeePath = 'employee';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<HttpResponse<EmployeeResponse[]>> {
    return this.http.get<EmployeeResponse[]>(`${this.apiServerUrl}/${this.employeePath}`, {observe: 'response'});
  }
}
