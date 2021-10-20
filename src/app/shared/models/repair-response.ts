import {TripResponse} from "./trip-response";

export class RepairResponse {
  id: number;
  leftDate: Date;
  leftMeterStatus: number;
  invoiceNumber: string;
  invoiceDate: Date;
  repairCost: number;
  pickupDate: Date;
  trip: TripResponse;
}
