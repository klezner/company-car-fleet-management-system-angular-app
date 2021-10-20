import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarComponent} from './components/car/car.component';
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "./shared/services/car.service";
import {FormsModule} from "@angular/forms";
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {CompanyComponent} from './components/company/company.component';
import {CompanyService} from "./shared/services/company.service";
import {CompanyDetailsComponent} from './components/company-details/company-details.component';
import {DepartmentComponent} from './components/department/department.component';
import {DepartmentService} from "./shared/services/department.service";
import {DepartmentDetailsComponent} from './components/department-details/department-details.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {EmployeeService} from "./shared/services/employee.service";
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {FleetCardComponent} from './components/fleet-card/fleet-card.component';
import {FleetCardService} from "./shared/services/fleet-card.service";
import {FleetCardDetailsComponent} from './components/fleet-card-details/fleet-card-details.component';
import {TripComponent} from './components/trip/trip.component';
import {TripService} from "./shared/services/trip.service";
import {TripDetailsComponent} from './components/trip-details/trip-details.component';
import {RefuelingComponent} from './components/refueling/refueling.component';
import {RefuelingService} from "./shared/services/refueling.service";
import {RefuelingDetailsComponent} from './components/refueling-details/refueling-details.component';
import {CarWorkshopComponent} from './components/car-workshop/car-workshop.component';
import {CarWorkshopService} from "./shared/services/car-workshop.service";
import {CarWorkshopDetailsComponent} from './components/car-workshop-details/car-workshop-details.component';
import {RepairComponent} from './components/repair/repair.component';
import {RepairService} from "./shared/services/repair.service";
import {RepairDetailsComponent} from './components/repair-details/repair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailsComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    FleetCardComponent,
    FleetCardDetailsComponent,
    TripComponent,
    TripDetailsComponent,
    RefuelingComponent,
    RefuelingDetailsComponent,
    CarWorkshopComponent,
    CarWorkshopDetailsComponent,
    RepairComponent,
    RepairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CarService,
    CompanyService,
    DepartmentService,
    EmployeeService,
    FleetCardService,
    TripService,
    RefuelingService,
    CarWorkshopService,
    RepairService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
