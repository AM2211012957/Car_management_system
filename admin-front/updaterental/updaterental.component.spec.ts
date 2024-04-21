import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterentalComponent } from './updaterental.component';

describe('UpdaterentalComponent', () => {
  let component: UpdaterentalComponent;
  let fixture: ComponentFixture<UpdaterentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
