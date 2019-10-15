import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListPage } from './filter-list.page';

describe('FilterListPage', () => {
  let component: FilterListPage;
  let fixture: ComponentFixture<FilterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
