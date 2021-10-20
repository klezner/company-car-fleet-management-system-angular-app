import {Component, OnInit, ViewChild} from '@angular/core';
import {RepairResponse} from "../../shared/models/repair-response";
import {RepairService} from "../../shared/services/repair.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {TripResponse} from "../../shared/models/trip-response";
import {CreateRepairRequest} from "../../shared/models/create-repair-request";
import {TripService} from "../../shared/services/trip.service";
import {CarWorkshopService} from "../../shared/services/car-workshop.service";
import {CarWorkshopResponse} from "../../shared/models/car-workshop-response";
import {UpdateRepairRequest} from "../../shared/models/update-repair-request";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
  repairs: RepairResponse[] | null = [];
  newRepair: CreateRepairRequest = new CreateRepairRequest();
  trips: TripResponse[] | null = [];
  carWorkshops: CarWorkshopResponse[] | null = [];
  editedRepair: UpdateRepairRequest = new UpdateRepairRequest();

  constructor(private repairService: RepairService,
              private tripService: TripService,
              private carWorkshopService: CarWorkshopService) {
  }

  @ViewChild('addRepairFormForm', {static: false}) addRepair: NgForm;
  @ViewChild('addRepairFormForm', {static: false}) editRepair: NgForm;

  ngOnInit(): void {
    this.getRepairs();
  }

  getRepairs(): void {
    this.repairService.getRepairs().subscribe(
      (response: HttpResponse<RepairResponse[]>) => {
        this.repairs = response.body;
        console.log('getRepairs -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onAddRepair(form: NgForm): void {
    this.repairService.postRepair(this.newRepair).subscribe(
      (response: HttpResponse<RepairResponse>) => {
        console.log(response.body);
        alert('postRepair -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeAddRepairModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateRepair(form: NgForm): void {
    this.repairService.editRepair(this.editedRepair).subscribe(
      (response: HttpResponse<RepairResponse>) => {
        console.log(response.body);
        alert('editRepair -> HttpStatus: ' + response.status + ' -> ' + response.body);
        this.onClear(form);
        document.getElementById('closeEditRepairModal')?.click();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClear(form: NgForm): void {
    form.reset();
    form.form.markAsPristine();
  }

  getTrips(): void {
    this.tripService.getTrips().subscribe(
      (response: HttpResponse<TripResponse[]>) => {
        this.trips = response.body;
        console.log('getTrips -> HttpStatus: ' + response.status + ' -> ' + response.body)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getCarWorkshops(): void {
    this.carWorkshopService.getCarWorkshops().subscribe(
      (response: HttpResponse<CarWorkshopResponse[]>) => {
        this.carWorkshops = response.body;
        console.log('getCarWorkshops -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSelectRepairIdToEdit(editedRepairId: number): void {
    this.repairService.getRepair(editedRepairId).subscribe(
      (response: HttpResponse<RepairResponse>) => {
        this.editedRepair.id = response.body?.id;
        this.editedRepair.leftDate = response.body?.leftDate;
        this.editedRepair.leftMeterStatus = response.body?.leftMeterStatus;
        this.editedRepair.invoiceNumber = response.body?.invoiceNumber;
        this.editedRepair.invoiceDate = response.body?.invoiceDate;
        this.editedRepair.repairCost = response.body?.repairCost;
        this.editedRepair.pickupDate = response.body?.pickupDate;
        this.editedRepair.tripId = response.body?.trip?.id;
        this.editedRepair.carWorkshopId = response.body?.carWorkshop?.id;
        console.log('getRepair -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
