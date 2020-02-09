import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coal',
  templateUrl: './coal.component.html',
  styleUrls: ['./coal.component.css']
})
export class CoalComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Coal');
  }

  ngOnInit() {
  }

}
