import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MenuPage
  // },
  {
    path: '',
    redirectTo: 'user/list',
    pathMatch: 'full'
  },
  {
    path: 'user/add',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user/list',
    loadChildren: () => import('./list-user/list-user.module').then( m => m.ListUserPageModule)
  },
  {
    path: 'merchant/add',
    loadChildren: () => import('./merchant/merchant.module').then( m => m.MerchantPageModule)
  },
  {
    path: 'merchant/list',
    loadChildren: () => import('./list-merchant/list-merchant.module').then( m => m.ListMerchantPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
