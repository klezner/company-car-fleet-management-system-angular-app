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

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailsComponent,
    CompanyComponent
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
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
