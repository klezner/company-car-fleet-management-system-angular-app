import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepairResponse} from "../models/repair-response";

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private apiServerUrl = environment.localApiUrl;
  private repairPath = 'repair';

  constructor(private http: HttpClient) {
  }

  getRepairs(): Observable<HttpResponse<RepairResponse[]>> {
    return this.http.get<RepairResponse[]>(`${this.apiServerUrl}/${this.repairPath}`, {observe: 'response'});
  }
}
