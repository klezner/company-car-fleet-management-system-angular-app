import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeResponse} from "../models/employee-response";
import {CreateEmployeeRequest} from "../models/create-employee-request";

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

  postEmployee(newEmployee: CreateEmployeeRequest): Observable<HttpResponse<EmployeeResponse>> {
    return this.http.post<EmployeeResponse>(`${this.apiServerUrl}/${this.employeePath}`, newEmployee, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}