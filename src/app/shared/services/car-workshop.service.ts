import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {CarWorkshopResponse} from "../models/car-workshop-response";
import {CreateCarWorkshopRequest} from "../models/create-car-workshop-request";
import {UpdateCarWorkshopRequest} from "../models/update-car-workshop-request";

@Injectable({
  providedIn: 'root'
})
export class CarWorkshopService {
  private apiServerUrl = environment.localApiUrl;
  private carWorkshopPath = 'carworkshop';

  constructor(private http: HttpClient) {
  }

  getCarWorkshops(): Observable<HttpResponse<CarWorkshopResponse[]>> {
    return this.http.get<CarWorkshopResponse[]>(`${this.apiServerUrl}/${this.carWorkshopPath}`, {observe: 'response'});
  }

  postCarWorkshop(newCarWorkshop: CreateCarWorkshopRequest): Observable<HttpResponse<CarWorkshopResponse>> {
    return this.http.post<CarWorkshopResponse>(`${this.apiServerUrl}/${this.carWorkshopPath}`, newCarWorkshop, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getCarWorkshop(id: number): Observable<HttpResponse<CarWorkshopResponse>> {
    return this.http.get<CarWorkshopResponse>(`${this.apiServerUrl}/${this.carWorkshopPath}/${id}`, {observe: 'response'});
  }

  editCarWorkshop(updatedCarWorkshop: UpdateCarWorkshopRequest): Observable<HttpResponse<CarWorkshopResponse>> {
    return this.http.put<CarWorkshopResponse>(`${this.apiServerUrl}/${this.carWorkshopPath}`, updatedCarWorkshop, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
