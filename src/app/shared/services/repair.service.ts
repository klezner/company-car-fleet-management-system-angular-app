import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepairResponse} from "../models/repair-response";
import {CreateRepairRequest} from "../models/create-repair-request";
import {UpdateRepairRequest} from "../models/update-repair-request";

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private apiServerUrl = environment.localApiUrl;
  private repairPath = 'repair';
  private carWorkshopPath = 'carworkshop';
  private tripPath = 'trip';

  constructor(private http: HttpClient) {
  }

  getRepairs(): Observable<HttpResponse<RepairResponse[]>> {
    return this.http.get<RepairResponse[]>(`${this.apiServerUrl}/${this.repairPath}`, {observe: 'response'});
  }

  postRepair(newRepair: CreateRepairRequest): Observable<HttpResponse<RepairResponse>> {
    return this.http.post<RepairResponse>(`${this.apiServerUrl}/${this.repairPath}`, newRepair, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getRepair(id: number): Observable<HttpResponse<RepairResponse>> {
    return this.http.get<RepairResponse>(`${this.apiServerUrl}/${this.repairPath}/${id}`, {observe: 'response'});
  }

  editRepair(updatedRepair: UpdateRepairRequest): Observable<HttpResponse<RepairResponse>> {
    return this.http.put<RepairResponse>(`${this.apiServerUrl}/${this.repairPath}`, updatedRepair, {
      observe: 'response',
      headers: {'Content-Type': 'application/json'}
    });
  }

  getRepairsByCarWorkshopId(carWorkshopId: number): Observable<HttpResponse<RepairResponse[]>> {
    return this.http.get<RepairResponse[]>(`${this.apiServerUrl}/${this.repairPath}/${this.carWorkshopPath}/${carWorkshopId}`, {observe: 'response'});
  }

  getRepairsByTripId(tripId: number): Observable<HttpResponse<RepairResponse[]>> {
    return this.http.get<RepairResponse[]>(`${this.apiServerUrl}/${this.repairPath}/${this.tripPath}/${tripId}`, {observe: 'response'});
  }
}
