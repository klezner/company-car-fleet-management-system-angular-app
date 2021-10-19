import {TripResponse} from "./trip-response";

export class RefuelingResponse {
  id: number;
  date: Date;
  meterStatus: number;
  fuelAmount: number;
  refuelingCost: number;
  trip: TripResponse;
}
