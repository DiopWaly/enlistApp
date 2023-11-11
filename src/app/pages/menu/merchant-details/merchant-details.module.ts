import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantDetailsPageRoutingModule } from './merchant-details-routing.module';

import { MerchantDetailsPage } from './merchant-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MerchantDetailsPageRoutingModule
  ],
  declarations: [MerchantDetailsPage]
})
export class MerchantDetailsPageModule {}
