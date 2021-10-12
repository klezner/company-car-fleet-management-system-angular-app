import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {CarDetailsComponent} from "./components/car-details/car-details.component";
import {CompanyComponent} from "./components/company/company.component";

const routes: Routes = [
  {path: "cars", component: CarComponent},
  {path: "car/:id", component: CarDetailsComponent},
  {path: "companies", component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
