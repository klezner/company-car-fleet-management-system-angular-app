export class CreateRepairRequest {
  leftDate: Date;
  leftMeterStatus: number;
  invoiceNumber: string;
  invoiceDate: Date;
  repairCost: number;
  pickupDate: Date;
  tripId: number;
  carWorkshopId: number;

  constructor() {
  }
}
