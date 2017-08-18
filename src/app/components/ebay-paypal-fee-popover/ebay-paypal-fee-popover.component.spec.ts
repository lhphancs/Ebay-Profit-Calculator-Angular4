import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayPaypalFeePopoverComponent } from './ebay-paypal-fee-popover.component';

describe('EbayPaypalFeePopoverComponent', () => {
  let component: EbayPaypalFeePopoverComponent;
  let fixture: ComponentFixture<EbayPaypalFeePopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbayPaypalFeePopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayPaypalFeePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
