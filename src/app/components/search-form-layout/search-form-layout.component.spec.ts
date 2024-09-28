import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormLayoutComponent } from './search-form-layout.component';

describe('SearchFormLayoutComponent', () => {
  let component: SearchFormLayoutComponent;
  let fixture: ComponentFixture<SearchFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
