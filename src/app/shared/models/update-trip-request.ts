export class UpdateTripRequest {
  id?: number;
  departureDate?: Date;
  returnDate?: Date;
  departureMeterStatus?: number;
  returnMeterStatus?: number;
  comments?: string;
  carId?: number;
  employeeId?: number;

  constructor() {
  }
}
