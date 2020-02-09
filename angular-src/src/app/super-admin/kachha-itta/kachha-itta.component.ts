import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kachha-itta',
  templateUrl: './kachha-itta.component.html',
  styleUrls: ['./kachha-itta.component.css']
})
export class KachhaIttaComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Kachha Itta');
  }

  ngOnInit() {
  }

}
