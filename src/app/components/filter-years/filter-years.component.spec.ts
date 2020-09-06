import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterYearsComponent } from './filter-years.component';

describe('FilterYearsComponent', () => {
  let component: FilterYearsComponent;
  let fixture: ComponentFixture<FilterYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
