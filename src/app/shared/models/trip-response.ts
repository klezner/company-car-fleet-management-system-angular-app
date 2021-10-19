import {CarResponse} from "./car-response";
import {EmployeeResponse} from "./employee-response";

export class TripResponse {
  id: number;
  departureDate: Date;
  returnDate: Date;
  departureMeterStatus: number;
  returnMeterStatus: number;
  comments: string;
  car: CarResponse;
  employee: EmployeeResponse;
}
