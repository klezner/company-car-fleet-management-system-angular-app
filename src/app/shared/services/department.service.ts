import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentResponse} from "../models/department-response";
import {CreateDepartmentRequest} from "../models/create-department-request";
import {UpdateDepartmentRequest} from "../models/update-department-request";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiServerUrl = environment.localApiUrl;
  private departmentPath = 'department';
  private companyPath = 'company';

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

  getDepartment(id: number): Observable<HttpResponse<DepartmentResponse>> {
    return this.http.get<DepartmentResponse>(`${this.apiServerUrl}/${this.departmentPath}/${id}`, {observe: 'response'});
  }

  editDepartment(updatedDepartment: UpdateDepartmentRequest): Observable<HttpResponse<DepartmentResponse>> {
    return this.http.put<DepartmentResponse>(`${this.apiServerUrl}/${this.departmentPath}`, updatedDepartment, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getDepartmentsByCompanyId(companyId: number): Observable<HttpResponse<DepartmentResponse[]>> {
    return this.http.get<DepartmentResponse[]>(`${this.apiServerUrl}/${this.departmentPath}/${this.companyPath}/${companyId}`, {observe: 'response'});
  }
}
