import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalaboutComponent } from './rentalabout.component';

describe('RentalaboutComponent', () => {
  let component: RentalaboutComponent;
  let fixture: ComponentFixture<RentalaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
