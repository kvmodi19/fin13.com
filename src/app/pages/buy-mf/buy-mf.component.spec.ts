import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMfComponent } from './buy-mf.component';

describe('BuyMfComponent', () => {
  let component: BuyMfComponent;
  let fixture: ComponentFixture<BuyMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
