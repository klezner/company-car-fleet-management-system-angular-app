import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {FleetCardResponse} from "../models/fleet-card-response";
import {CreateFleetCardRequest} from "../models/create-fleet-card-request";
import {UpdateFleetCardRequest} from "../models/update-fleet-card-request";

@Injectable({
  providedIn: 'root'
})
export class FleetCardService {
  private apiServerUrl = environment.localApiUrl;
  private fleetCardPath = 'fleetcard';

  constructor(private http: HttpClient) {
  }

  getFleetCards(): Observable<HttpResponse<FleetCardResponse[]>> {
    return this.http.get<FleetCardResponse[]>(`${this.apiServerUrl}/${this.fleetCardPath}`, {observe: 'response'});
  }

  postFleetCard(newFleetCard: CreateFleetCardRequest): Observable<HttpResponse<FleetCardResponse>> {
    return this.http.post<FleetCardResponse>(`${this.apiServerUrl}/${this.fleetCardPath}`, newFleetCard, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getFleetCard(id: number): Observable<HttpResponse<FleetCardResponse>> {
    return this.http.get<FleetCardResponse>(`${this.apiServerUrl}/${this.fleetCardPath}/${id}`, {observe: 'response'});
  }

  editFleetCard(updatedFleetCard: UpdateFleetCardRequest): Observable<HttpResponse<FleetCardResponse>> {
    return this.http.put<FleetCardResponse>(`${this.apiServerUrl}/${this.fleetCardPath}`, updatedFleetCard, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }
}
