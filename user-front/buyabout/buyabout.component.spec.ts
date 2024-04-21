import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyaboutComponent } from './buyabout.component';

describe('BuyaboutComponent', () => {
  let component: BuyaboutComponent;
  let fixture: ComponentFixture<BuyaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
