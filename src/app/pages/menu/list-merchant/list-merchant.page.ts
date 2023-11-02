import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-merchant',
  templateUrl: './list-merchant.page.html',
  styleUrls: ['./list-merchant.page.scss'],
})
export class ListMerchantPage implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter();
  constructor(
    private router: Router
  ) {
    this.title.emit('Utilisteur')
   }

  ngOnInit() {
  }

}
