import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblObjCountComponent } from './tbl-obj-count.component';

describe('TblObjCountComponent', () => {
  let component: TblObjCountComponent;
  let fixture: ComponentFixture<TblObjCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblObjCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblObjCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
