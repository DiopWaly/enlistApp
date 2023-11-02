import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  private activeButtonSubject!: BehaviorSubject<boolean>
  activateButton$!: Observable<boolean>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.activeButtonSubject = new BehaviorSubject<boolean>(true)
    this.activateButton$ = this.activeButtonSubject.asObservable(); 
  }
  users(){
    this.activeButtonSubject.next(true)
  }
  merchants(){
    this.activeButtonSubject.next(false)
  }

}
