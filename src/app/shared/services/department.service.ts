import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentResponse} from "../models/department-response";
import {CreateDepartmentRequest} from "../models/create-department-request";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiServerUrl = environment.localApiUrl;
  private departmentPath = 'department';

  constructor(private http: HttpClient) {
  }

  getDepartments(): Observable<HttpResponse<DepartmentResponse[]>> {
    return this.http.get<DepartmentResponse[]>(`${this.apiServerUrl}/${this.departmentPath}`, {observe: 'response'});
  }

  postDepartment(newDepartment: CreateDepartmentRequest): Observable<HttpResponse<DepartmentResponse>> {
    return this.http.post<DepartmentResponse>(`${this.apiServerUrl}/${this.departmentPath}`, newDepartment, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
