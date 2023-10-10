import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilletManagementComponent } from './billet-management.component';

describe('BilletManagementComponent', () => {
  let component: BilletManagementComponent;
  let fixture: ComponentFixture<BilletManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilletManagementComponent]
    });
    fixture = TestBed.createComponent(BilletManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
