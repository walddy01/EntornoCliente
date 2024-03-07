import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOut1Component } from './in-out1.component';

describe('InOut1Component', () => {
  let component: InOut1Component;
  let fixture: ComponentFixture<InOut1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOut1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOut1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
