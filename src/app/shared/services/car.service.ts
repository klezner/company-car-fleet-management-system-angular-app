import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarResponse} from "../models/car-response";

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
}
