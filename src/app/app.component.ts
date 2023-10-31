import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ajouter utilisateur', url: '/menu/user/add', icon: 'person-add' },
    { title: 'Liste utilisateur', url: '/menu/user/list', icon: 'people' },
    { title: 'Ajouter marchand', url: '/menu/merchant/add', icon: 'paper-plane' },
    { title: 'Liste marchand', url: '/menu/merchant/list', icon: 'archive' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
