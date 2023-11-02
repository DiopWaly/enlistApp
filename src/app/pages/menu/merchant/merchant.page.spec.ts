import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantPage } from './merchant.page';
import { async } from 'rxjs';

describe('MerchantPage', () => {
  let component: MerchantPage;
  let fixture: ComponentFixture<MerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
