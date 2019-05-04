import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCellPhonesFormComponent } from './seller-cell-phones-form.component';

describe('SellerCellPhonesFormComponent', () => {
  let component: SellerCellPhonesFormComponent;
  let fixture: ComponentFixture<SellerCellPhonesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCellPhonesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCellPhonesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
