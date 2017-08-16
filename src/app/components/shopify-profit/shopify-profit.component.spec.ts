import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyProfitComponent } from './shopify-profit.component';

describe('ShopifyProfitComponent', () => {
  let component: ShopifyProfitComponent;
  let fixture: ComponentFixture<ShopifyProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopifyProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopifyProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
