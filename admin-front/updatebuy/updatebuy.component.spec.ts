import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebuyComponent } from './updatebuy.component';

describe('UpdatebuyComponent', () => {
  let component: UpdatebuyComponent;
  let fixture: ComponentFixture<UpdatebuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
