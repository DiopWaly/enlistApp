import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  users: any = []
  private usersSubject!: BehaviorSubject<boolean>
  usersObs$!: Observable<boolean>
  constructor(
    private router: Router,
    private dbService: DatabaseService,
  ) { }

  ngOnInit() {
    this.usersSubject = new BehaviorSubject<boolean>(false)
    this.usersObs$ = this.usersSubject.asObservable()
    this.listUser();
  }
  listUser(){
    this.dbService.get('user')
      .then((result) => {
        for(let i=0; i < result.rows.length; i++){
          console.log('fistNmaie :',result.rows.item(i).firstName)
          this.users[i] = result.rows.item(i)
        }
        this.usersSubject.next(true)
        console.log('datas :',this.users)
      })
      .catch(e => console.log(JSON.stringify(e)))
  }
}

