import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zameen-royalty',
  templateUrl: './zameen-royalty.component.html',
  styleUrls: ['./zameen-royalty.component.css']
})
export class ZameenRoyaltyComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Zameen Royalty');
  }

  ngOnInit() {
  }

}
