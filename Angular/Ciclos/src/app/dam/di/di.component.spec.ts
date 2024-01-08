import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponent } from './di.component';

describe('DiComponent', () => {
  let component: DiComponent;
  let fixture: ComponentFixture<DiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
