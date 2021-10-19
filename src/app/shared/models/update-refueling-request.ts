export class UpdateRefuelingRequest {
  id?: number;
  date?: Date;
  meterStatus?: number;
  fuelAmount?: number;
  refuelingCost?: number;
  tripId?: number;

  constructor() {
  }
}
