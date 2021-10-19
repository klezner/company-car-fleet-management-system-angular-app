export class CreateTripRequest {
  departureDate: Date;
  returnDate: Date;
  departureMeterStatus: number;
  returnMeterStatus: number;
  comments: string;
  carId: number;
  employeeId: number;

  constructor() {
  }
}
