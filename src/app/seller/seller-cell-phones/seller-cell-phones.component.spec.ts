import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCellPhonesComponent } from './seller-cell-phones.component';

describe('SellerCellPhonesComponent', () => {
  let component: SellerCellPhonesComponent;
  let fixture: ComponentFixture<SellerCellPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCellPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCellPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
