import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantDetailsPage } from './merchant-details.page';

describe('UserDetailsPage', () => {
  let component: MerchantDetailsPage;
  let fixture: ComponentFixture<MerchantDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MerchantDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
