import { ComponentFixture, TestBed } from '@angular/core/testing';

import { React2Component } from './react2.component';

describe('React2Component', () => {
  let component: React2Component;
  let fixture: ComponentFixture<React2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ React2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(React2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
