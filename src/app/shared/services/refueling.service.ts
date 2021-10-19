import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RefuelingResponse} from "../models/refueling-response";
import {CreateRefuelingRequest} from "../models/create-refueling-request";

@Injectable({
  providedIn: 'root'
})
export class RefuelingService {
  private apiServerUrl = environment.localApiUrl;
  private refuelingPath = 'refueling';

  constructor(private http: HttpClient) {
  }

  getRefuelings(): Observable<HttpResponse<RefuelingResponse[]>> {
    return this.http.get<RefuelingResponse[]>(`${this.apiServerUrl}/${this.refuelingPath}`, {observe: 'response'});
  }

  postRefueling(newRefueling: CreateRefuelingRequest): Observable<HttpResponse<RefuelingResponse>> {
    return this.http.post<RefuelingResponse>(`${this.apiServerUrl}/${this.refuelingPath}`, newRefueling, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
