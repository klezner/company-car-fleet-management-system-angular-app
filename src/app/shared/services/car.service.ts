import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarResponse} from "../models/car-response";
import {CreateCarRequest} from "../models/create-car-request";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiServerUrl = environment.localApiUrl;
  private carPath = 'car';

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<HttpResponse<CarResponse[]>> {
    return this.http.get<CarResponse[]>(`${this.apiServerUrl}/${this.carPath}`, {observe: 'response'});
  }

  postCar(newCar: CreateCarRequest): Observable<HttpResponse<CarResponse>> {
    return this.http.post<CarResponse>(`${this.apiServerUrl}/${this.carPath}`, newCar, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
