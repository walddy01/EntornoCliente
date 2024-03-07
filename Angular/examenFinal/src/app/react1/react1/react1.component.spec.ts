import { ComponentFixture, TestBed } from '@angular/core/testing';

import { React1Component } from './react1.component';

describe('React1Component', () => {
  let component: React1Component;
  let fixture: ComponentFixture<React1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ React1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(React1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
