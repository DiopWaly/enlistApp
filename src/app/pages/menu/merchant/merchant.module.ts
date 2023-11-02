import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantPageRoutingModule } from './merchant-routing.module';

import { MerchantPage } from './merchant.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MerchantPageRoutingModule,
    QRCodeModule
  ],
  declarations: [MerchantPage],
  providers: [Storage]
})
export class MerchantPageModule {}
