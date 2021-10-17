import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CompanyComponent} from "./components/company/company.component";
import {CompanyDetailsComponent} from "./components/company-details/company-details.component";
import {DepartmentComponent} from "./components/department/department.component";
import {DepartmentDetailsComponent} from "./components/department-details/department-details.component";
import {EmployeeComponent} from "./components/employee/employee.component";

const routes: Routes = [
  {path: "cars", component: CarComponent},
  {path: "car/:id", component: CarDetailsComponent},
  {path: "companies", component: CompanyComponent},
  {path: "company/:id", component: CompanyDetailsComponent},
  {path: "departments", component: DepartmentComponent},
  {path: "department/:id", component: DepartmentDetailsComponent},
  {path: "employees", component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
