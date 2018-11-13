import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListItemDetailComponent } from './news-list-item-detail.component';

describe('NewsListItemDetailComponent', () => {
  let component: NewsListItemDetailComponent;
  let fixture: ComponentFixture<NewsListItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
