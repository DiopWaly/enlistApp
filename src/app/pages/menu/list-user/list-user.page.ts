import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { StructureDB } from 'src/app/services/structure-db';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  users: any = []
  userDetail: any = 1;
  private usersSubject!: BehaviorSubject<boolean>
  usersObs$!: Observable<boolean>
  private userDetailSubject!: BehaviorSubject<boolean>
  userDetailObs$!: Observable<boolean>
  constructor(
    private router: Router,
    private dbService: DatabaseService,
  ) { }

  ngOnInit() {
    this.usersSubject = new BehaviorSubject<boolean>(false)
    this.usersObs$ = this.usersSubject.asObservable()
    this.userDetailSubject = new BehaviorSubject<boolean>(false)
    this.userDetailObs$ = this.userDetailSubject.asObservable()
    this.listUser();
  }
  listUser(){
    this.dbService.get(StructureDB.USER)
      .then((result) => {
        for(let i=0; i < result.rows.length; i++){
          this.users[i] = result.rows.item(result.rows.length - 1 - i)
        }
        this.usersSubject.next(true)
      })
      .catch(e => console.log(JSON.stringify(e)))
  }
  showDetailUser(user: any){
    console.log('yup');
    this.userDetail = user
    this.userDetailSubject.next(true)
  }
  backToList(){
    this.userDetailSubject.next(false)
  }
}

