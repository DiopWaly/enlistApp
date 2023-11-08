import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';

@Component({
  selector: 'app-list-merchant',
  templateUrl: './list-merchant.page.html',
  styleUrls: ['./list-merchant.page.scss'],
})
export class ListMerchantPage implements OnInit {
  merchants: any = []
  private merchantsSubject!: BehaviorSubject<boolean>
  merchantsObs$!: Observable<boolean>
  private merchantRechercheSubject!: BehaviorSubject<any>
  merchantRechercheObs$!: Observable<any>
  constructor(
    private router: Router,
    private dbService: DatabaseService
  ) {
   }

  ngOnInit() {
    this.merchantsSubject = new BehaviorSubject<boolean>(false)
    this.merchantsObs$ = this.merchantsSubject.asObservable()
    this.merchantRechercheSubject = new BehaviorSubject<any>(this.merchants)
    this.merchantRechercheObs$ = this.merchantRechercheSubject.asObservable()
    this.listMerchant()
  }

  listMerchant(){
    this.dbService.get(StructureDB.MERCHANT)
      .then((result) => {
        for(let i=0; i < result.rows.length; i++){
          this.merchants[i] = result.rows.item(result.rows.length - 1 - i)
        }
        this.merchantRechercheSubject.next(this.merchants)
        this.merchantsSubject.next(true)
      })
      .catch(e => console.log(JSON.stringify(e)))
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.merchantRechercheSubject.next(this.merchants.filter((d:any) => {
      return d.merchantTitle.toLowerCase().indexOf(query) > -1 ||
            d.tel.toLowerCase().indexOf(query) > -1
    }))
  }

}
