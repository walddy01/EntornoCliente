import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerejilComponent } from './perejil.component';

describe('PerejilComponent', () => {
  let component: PerejilComponent;
  let fixture: ComponentFixture<PerejilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerejilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerejilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
