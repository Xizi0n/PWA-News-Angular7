import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistitemComponent } from './newslistitem.component';

describe('NewslistitemComponent', () => {
  let component: NewslistitemComponent;
  let fixture: ComponentFixture<NewslistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
