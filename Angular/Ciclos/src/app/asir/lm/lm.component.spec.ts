import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmComponent } from './lm.component';

describe('LmComponent', () => {
  let component: LmComponent;
  let fixture: ComponentFixture<LmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
