import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTooltipModule, MatDialogModule, MatCardModule} from '@angular/material';

import { NgxPrintModule } from 'ngx-print';
import {NgxPaginationModule} from 'ngx-pagination';

const MaterialComponents = [
  SweetAlert2Module,
  MatToolbarModule,
  MatSidenavModule,
  ScrollingModule,
  MatProgressSpinnerModule,
  LayoutModule,
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatCardModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,

  //other modules
  NgxPrintModule,
  NgxPaginationModule
]

@NgModule({
  declarations: [],
  imports: [ 
    MaterialComponents
  ],
  exports: [ MaterialComponents ]
})
export class AngularMaterialModule { }
