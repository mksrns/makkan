import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Vehicle');
  }

  ngOnInit() {
  }

}
