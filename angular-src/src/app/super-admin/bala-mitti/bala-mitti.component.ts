import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bala-mitti',
  templateUrl: './bala-mitti.component.html',
  styleUrls: ['./bala-mitti.component.css']
})
export class BalaMittiComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Makkan | Balla | Mitti');
  }

  ngOnInit() {
  }

}
