import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMerchantPage } from './list-merchant.page';

const routes: Routes = [
  {
    path: '',
    component: ListMerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMerchantPageRoutingModule {}
