import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMerchantPage } from './list-merchant.page';

describe('ListMerchantPage', () => {
  let component: ListMerchantPage;
  let fixture: ComponentFixture<ListMerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
