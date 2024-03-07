import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOut2Component } from './in-out2.component';

describe('InOut2Component', () => {
  let component: InOut2Component;
  let fixture: ComponentFixture<InOut2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOut2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOut2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
