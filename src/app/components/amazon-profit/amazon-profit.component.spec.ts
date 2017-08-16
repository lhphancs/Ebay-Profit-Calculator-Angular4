import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonProfitComponent } from './amazon-profit.component';

describe('AmazonProfitComponent', () => {
  let component: AmazonProfitComponent;
  let fixture: ComponentFixture<AmazonProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
