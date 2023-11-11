import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toDay!: Date
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.toDay = new Date();
    // console.log(this.route.snapshot.data['user']);
  }

}
