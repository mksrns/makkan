import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as $ from 'jquery';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuperAdminService } from '../_services/superAdmin/super-admin.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DailySellComponent } from './daily-sell/daily-sell.component';
import { StaffComponent } from './staff/staff.component';
import { CoalComponent } from './coal/coal.component';
import { ZameenRoyaltyComponent } from './zameen-royalty/zameen-royalty.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BalaMittiComponent } from './bala-mitti/bala-mitti.component';
import { KachhaIttaComponent } from './kachha-itta/kachha-itta.component';
import { AboutComponent } from './about/about.component';
 

@NgModule({
  declarations: [LoginComponent, DashboardComponent, Dashboard1Component, DailySellComponent, StaffComponent, CoalComponent, ZameenRoyaltyComponent, VehicleComponent, BalaMittiComponent, KachhaIttaComponent, AboutComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [SuperAdminService]
})
export class SuperAdminModule { }
