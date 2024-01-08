import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmmsComponent } from './pmms.component';

describe('PmmsComponent', () => {
  let component: PmmsComponent;
  let fixture: ComponentFixture<PmmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
