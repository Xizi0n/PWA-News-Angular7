import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListItemComponent } from './favourite-list-item.component';

describe('FavouriteListItemComponent', () => {
  let component: FavouriteListItemComponent;
  let fixture: ComponentFixture<FavouriteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
