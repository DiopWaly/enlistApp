import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private activeButtonSubject!: BehaviorSubject<boolean>
  activateButton$!: Observable<boolean>;
  constructor(private menuCtrl: MenuController,private router: Router) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
    this.activeButtonSubject = new BehaviorSubject<boolean>(true)
    this.activateButton$ = this.activeButtonSubject.asObservable(); 
  }
  users(){
    this.router.navigate(['menu/user/list'])
    this.activeButtonSubject.next(true);
  }
  merchants(){
    this.router.navigate(['menu/merchant/list'])
    this.activeButtonSubject.next(false)
  }

}
