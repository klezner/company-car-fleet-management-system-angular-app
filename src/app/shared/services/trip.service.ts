import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {TripResponse} from "../models/trip-response";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiServerUrl = environment.localApiUrl;
  private tripPath = 'trip';

  constructor(private http: HttpClient) {
  }

  getTrips(): Observable<HttpResponse<TripResponse[]>> {
    return this.http.get<TripResponse[]>(`${this.apiServerUrl}/${this.tripPath}`, {observe: 'response'});
  }
}
