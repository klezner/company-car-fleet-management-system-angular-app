import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {CarWorkshopResponse} from "../models/car-workshop-response";

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
}
