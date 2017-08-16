import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbayProfitComponent } from './ebay-profit.component';

describe('EbayProfitComponent', () => {
  let component: EbayProfitComponent;
  let fixture: ComponentFixture<EbayProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbayProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbayProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
