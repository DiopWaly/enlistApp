import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-merchant',
  templateUrl: './list-merchant.page.html',
  styleUrls: ['./list-merchant.page.scss'],
})
export class ListMerchantPage implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.title.emit('Utilisteur')
   }

  ngOnInit() {
  }

}
