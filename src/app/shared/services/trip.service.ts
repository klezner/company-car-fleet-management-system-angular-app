import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {TripResponse} from "../models/trip-response";
import {CreateTripRequest} from "../models/create-trip-request";
import {UpdateTripRequest} from "../models/update-trip-request";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiServerUrl = environment.localApiUrl;
  private tripPath = 'trip';
  private carPath = 'car';

  constructor(private http: HttpClient) {
  }

  getTrips(): Observable<HttpResponse<TripResponse[]>> {
    return this.http.get<TripResponse[]>(`${this.apiServerUrl}/${this.tripPath}`, {observe: 'response'});
  }

  postTrip(newTrip: CreateTripRequest): Observable<HttpResponse<TripResponse>> {
    return this.http.post<TripResponse>(`${this.apiServerUrl}/${this.tripPath}`, newTrip, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getTrip(id: number): Observable<HttpResponse<TripResponse>> {
    return this.http.get<TripResponse>(`${this.apiServerUrl}/${this.tripPath}/${id}`, {observe: 'response'});
  }

  editTrip(updatedTrip: UpdateTripRequest): Observable<HttpResponse<TripResponse>> {
    return this.http.put<TripResponse>(`${this.apiServerUrl}/${this.tripPath}`, updatedTrip, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getTripsByCarId(carId: number): Observable<HttpResponse<TripResponse[]>> {
    return this.http.get<TripResponse[]>(`${this.apiServerUrl}/${this.tripPath}/${this.carPath}/${carId}`, {observe: 'response'});
  }
}
