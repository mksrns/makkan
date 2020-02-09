import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomepageComponent } from './ecommerce/homepage/homepage.component';
import * as $ from 'jquery';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  // {path: '', component: PageNotFoundComponent},
  {
    path:'super-admin',
    loadChildren:'./super-admin/super-admin.module#SuperAdminModule'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
