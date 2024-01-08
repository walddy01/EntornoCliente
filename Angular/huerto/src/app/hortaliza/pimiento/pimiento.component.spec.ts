import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimientoComponent } from './pimiento.component';

describe('PimientoComponent', () => {
  let component: PimientoComponent;
  let fixture: ComponentFixture<PimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
