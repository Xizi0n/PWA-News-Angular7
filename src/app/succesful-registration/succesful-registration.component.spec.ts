import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulRegistrationComponent } from './succesful-registration.component';

describe('SuccesfulRegistrationComponent', () => {
  let component: SuccesfulRegistrationComponent;
  let fixture: ComponentFixture<SuccesfulRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesfulRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
