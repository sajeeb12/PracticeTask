import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBtnComponent } from './serach-btn.component';

describe('SerachBtnComponent', () => {
  let component: SerachBtnComponent;
  let fixture: ComponentFixture<SerachBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerachBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
