import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminGuardGuard } from '../_guards/super-admin-guard.guard';

import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { DailySellComponent } from './daily-sell/daily-sell.component';
import { StaffComponent } from './staff/staff.component';
import { CoalComponent } from './coal/coal.component';
import { ZameenRoyaltyComponent } from './zameen-royalty/zameen-royalty.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BalaMittiComponent } from './bala-mitti/bala-mitti.component';
import { KachhaIttaComponent } from './kachha-itta/kachha-itta.component';
import { AboutComponent } from './about/about.component';
 
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, 
    canActivate: [SuperAdminGuardGuard],
    children: [
      {path:'', component: Dashboard1Component},
      {path:'1', component: Dashboard1Component},
      {path:'daily-sell', component: DailySellComponent},
      {path:'staff', component: StaffComponent},
      {path:'coal', component: CoalComponent},
      {path:'zameen-royalty', component: ZameenRoyaltyComponent},
      {path:'vehicle', component: VehicleComponent},
      {path:'bala-mitti', component: BalaMittiComponent},
      {path:'kachha-itta', component: KachhaIttaComponent},
      {path:'about-us', component: AboutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
