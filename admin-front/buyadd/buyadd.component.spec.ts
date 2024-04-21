import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyaddComponent } from './buyadd.component';

describe('BuyaddComponent', () => {
  let component: BuyaddComponent;
  let fixture: ComponentFixture<BuyaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
