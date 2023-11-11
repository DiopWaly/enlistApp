import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMerchantPageRoutingModule } from './list-merchant-routing.module';

import { ListMerchantPage } from './list-merchant.page';
import { MerchantDetailsPage } from '../merchant-details/merchant-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListMerchantPageRoutingModule
  ],
  declarations: [ListMerchantPage,MerchantDetailsPage]
})
export class ListMerchantPageModule {}
