import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FagComponent } from './fag.component';

describe('FagComponent', () => {
  let component: FagComponent;
  let fixture: ComponentFixture<FagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
