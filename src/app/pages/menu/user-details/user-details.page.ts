import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  @Input() user: any 
  constructor() { }

  ngOnInit() {
    console.log('user :',this.user);
  }

}
