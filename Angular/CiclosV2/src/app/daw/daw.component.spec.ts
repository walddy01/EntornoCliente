import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DawComponent } from './daw.component';

describe('DawComponent', () => {
  let component: DawComponent;
  let fixture: ComponentFixture<DawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
