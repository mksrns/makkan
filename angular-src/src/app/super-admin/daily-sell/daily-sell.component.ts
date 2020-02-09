import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonServicesService } from 'src/app/_services/common-services.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-daily-sell',
  templateUrl: './daily-sell.component.html',
  styleUrls: ['./daily-sell.component.css']
})
export class DailySellComponent implements OnInit {
  dailySellForm: FormGroup;
  searchForm: FormGroup;
  dailySells: any[];
  loading: boolean = false;
  show_report: boolean = false;

  constructor(private titleService: Title, private formbuilder: FormBuilder, private commonServ: CommonServicesService) { 
    this.titleService.setTitle('Makkan | Daily Sell');
  }

  ngOnInit() {
    this.dailySellForm = this.formbuilder.group({ 
      customer_name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      area: [''],
      locality: [''],
      district: ['', [Validators.required]],
      state: [''],
      brick_qty: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      gaddi_bhara: [''],
      vehicle_no: [''],
      deposit: ['', [Validators.required]],
    });
    this.searchForm = this.formbuilder.group({ 
      customer_name: [''],
      saleDate: ['']
    });
  }
  addNewSell(){
    let dailySellData = this.dailySellForm.value;
    console.log(dailySellData);
    this.commonServ.post('dailySells', dailySellData).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  showReport(){
    this.loading = true;
    var d = new Date();
    this.commonServ.getAll(`dailySells?q=&date=${d.toISOString().split('T')[0]}`).subscribe((data:any) => {
      this.loading = false;
      this.show_report = true;
      this.dailySells = data.dailySells[0].data;
    }, error => console.log(error));
  }

  filterSales() {
    let searchData = this.searchForm.value;
    console.log(searchData.saleDate.toISOString());
    this.commonServ.getAll(`dailySells?q=${searchData.customer_name}&date=${searchData.saleDate.toISOString().split('T')[0]}`).subscribe((data:any) => {
      this.loading = false;
      this.show_report = true;
      this.dailySells = data.dailySells[0].data;
    }, error => console.log(error));
  }

  hideReport() {
    this.show_report = false;
  }
}
