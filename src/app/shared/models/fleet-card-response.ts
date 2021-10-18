import {CarResponse} from "./car-response";

export class FleetCardResponse {
  id: number;
  number: number;
  expirationDate: Date;
  type: string;
  car: CarResponse;
}
