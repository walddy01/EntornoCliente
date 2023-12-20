import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrecolComponent } from './brecol.component';

describe('BrecolComponent', () => {
  let component: BrecolComponent;
  let fixture: ComponentFixture<BrecolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrecolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrecolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
