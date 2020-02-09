import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonServicesService } from 'src/app/_services/common-services.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-sell',
  templateUrl: './daily-sell.component.html',
  styleUrls: ['./daily-sell.component.css']
})
export class DailySellComponent implements OnInit {
  dailySellForm: FormGroup;
  dailySells: any[];
  loading: boolean = true;
  states: any[];
  districts: any[];

  constructor(private titleService: Title, private formbuilder: FormBuilder, private commonServ: CommonServicesService) { 
    this.titleService.setTitle('Makkan | Daily Sell');
  }

  ngOnInit() {
    this.dailySellForm = this.formbuilder.group({ 
      customerName: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      area: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      brickQuality: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      gaddiBhara: ['', [Validators.required]],
      vehicleNo: ['', [Validators.required]],
      deposit: ['', [Validators.required]],
    });

    this.commonServ.getAll('daily-sells').subscribe((data) => {
      this.loading = false;
      this.dailySells = data;
      console.log(this.dailySells);
    }, error => console.log(error));
    
    this.commonServ.getAll('states').subscribe((data) => {
      this.states = data;
      console.log(this.dailySells);
    }, error => console.log(error));

    this.commonServ.getAll('districts').subscribe((data) => {
      this.districts = data;
      console.log(this.dailySells);
    }, error => console.log(error));
  }
  addNewSell(){
    let dailySellData = this.dailySellForm.value;
    console.log(dailySellData);
    this.commonServ.post('daily-sell', dailySellData).subscribe(
      data => {
        console.log(data);
        this.commonServ.getAll('daily-sells').subscribe((data) => {
          this.loading = false;
          this.dailySells = data;
          console.log(this.dailySells);
        }, error => console.log(error));
      },
      error => {
        console.log(error);
      }
    );
  }
}
