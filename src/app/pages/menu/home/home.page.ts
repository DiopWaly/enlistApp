import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toDay!: Date
  constructor() { }

  ngOnInit() {
    this.toDay = new Date();
    console.log();
  }

}
