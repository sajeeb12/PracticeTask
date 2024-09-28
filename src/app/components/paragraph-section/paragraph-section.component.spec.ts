import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphSectionComponent } from './paragraph-section.component';

describe('ParagraphSectionComponent', () => {
  let component: ParagraphSectionComponent;
  let fixture: ComponentFixture<ParagraphSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
