import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentResponse} from "../models/department-response";

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
}
