import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWeightPopoverComponent } from './box-weight-popover.component';

describe('BoxWeightPopoverComponent', () => {
  let component: BoxWeightPopoverComponent;
  let fixture: ComponentFixture<BoxWeightPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWeightPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWeightPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
