import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMerchantPageRoutingModule } from './list-merchant-routing.module';

import { ListMerchantPage } from './list-merchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMerchantPageRoutingModule
  ],
  declarations: [ListMerchantPage]
})
export class ListMerchantPageModule {}
