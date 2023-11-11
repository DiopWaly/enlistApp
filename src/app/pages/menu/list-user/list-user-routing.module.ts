import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserPage } from './list-user.page';
import { UsersResolver } from 'src/app/services/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListUserPage,
    resolve: {
      user: UsersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUserPageRoutingModule {}
