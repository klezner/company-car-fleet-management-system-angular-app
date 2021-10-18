import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {FleetCardResponse} from "../models/fleet-card-response";

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
}
