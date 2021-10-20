import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CompanyComponent} from "./components/company/company.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";
import {DepartmentComponent} from "./components/department/department.component";
import {DepartmentDetailsComponent} from "./components/department-details/department-details.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";
import {FleetCardComponent} from "./components/fleet-card/fleet-card.component";
import {FleetCardDetailsComponent} from "./components/fleet-card-details/fleet-card-details.component";
import {TripComponent} from "./components/trip/trip.component";
import {TripDetailsComponent} from "./components/trip-details/trip-details.component";
import {RefuelingComponent} from "./components/refueling/refueling.component";
import {RefuelingDetailsComponent} from "./components/refueling-details/refueling-details.component";
import {CarWorkshopComponent} from "./components/car-workshop/car-workshop.component";
import {CarWorkshopDetailsComponent} from "./components/car-workshop-details/car-workshop-details.component";
import {RepairComponent} from "./components/repair/repair.component";
import {RepairDetailsComponent} from "./components/repair-details/repair-details.component";

const routes: Routes = [
  {path: "cars", component: CarComponent},
  {path: "car/:id", component: CarDetailsComponent},
  {path: "companies", component: CompanyComponent},
  {path: "company/:id", component: CompanyDetailsComponent},
  {path: "departments", component: DepartmentComponent},
  {path: "department/:id", component: DepartmentDetailsComponent},
  {path: "employees", component: EmployeeComponent},
  {path: "employee/:id", component: EmployeeDetailsComponent},
  {path: "fleetcards", component: FleetCardComponent},
  {path: "fleetcard/:id", component: FleetCardDetailsComponent},
  {path: "trips", component: TripComponent},
  {path: "trip/:id", component: TripDetailsComponent},
  {path: "refuelings", component: RefuelingComponent},
  {path: "refueling/:id", component: RefuelingDetailsComponent},
  {path: "carworkshops", component: CarWorkshopComponent},
  {path: "carworkshop/:id", component: CarWorkshopDetailsComponent},
  {path: "repairs", component: RepairComponent},
  {path: "repair/:id", component: RepairDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
