import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Dashboard');
}

  ngOnInit() {
  }

}
