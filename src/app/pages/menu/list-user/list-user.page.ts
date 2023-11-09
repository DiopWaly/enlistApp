import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  users: any = [
    // {fistName: 'Papa Waly', lastName: 'Diop'},
    // {fistName: 'Waly', lastName: 'Ndiaye'},
    // {fistName: 'Moussa', lastName: 'Ly'},
    // {fistName: 'Malick', lastName: 'Fall'},
  ]
  userDetail: any = 1;
  private usersSubject!: BehaviorSubject<boolean>
  usersObs$!: Observable<boolean>
  private userDetailSubject!: BehaviorSubject<boolean>
  userDetailObs$!: Observable<boolean>
  private userRechercheSubject!: BehaviorSubject<any>
  userRechercheObs$!: Observable<any>
  constructor(
    private router: Router,
    private dbService: DatabaseService,
  ) { }

  ngOnInit() {
    this.usersSubject = new BehaviorSubject<boolean>(false)
    this.usersObs$ = this.usersSubject.asObservable()
    this.userDetailSubject = new BehaviorSubject<boolean>(false)
    this.userDetailObs$ = this.userDetailSubject.asObservable()
    this.userRechercheSubject = new BehaviorSubject<any>(this.users)
    this.userRechercheObs$ = this.userRechercheSubject.asObservable()
    this.listUser();
  }
  listUser(){
    this.dbService.get(StructureDB.USER)
      .then((result) => {
        for(let i=0; i < result.rows.length; i++){
          this.users[i] = result.rows.item(result.rows.length - 1 - i)
        }
        console.log('this.users :',this.users);
        
        this.userRechercheSubject.next(this.users)
        this.usersSubject.next(true)
      })
      .catch(e => console.log(JSON.stringify(e)))
  }
  showDetailUser(user: any){
    this.userDetail = user
    this.userDetailSubject.next(true)
  }
  showDetailUserTest(){
    // this.userDetail = user
    this.userDetailSubject.next(true)
  }

  backToList(){
    this.userDetailSubject.next(false)
  }
  testFab(){
    console.log('fab');
    
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    // this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    this.userRechercheSubject.next(this.users.filter((d:any) => {
      return d.firstName.toLowerCase().indexOf(query) > -1 || 
            d.lastName.toLowerCase().indexOf(query) > -1 ||
            d.tel.toLowerCase().indexOf(query) > -1
    }))
  }
  didDismiss(event: any){
    // console.log('event :',this.searchContent);
    
  }
  // onIonInfinite(ev: any) {
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }
}

