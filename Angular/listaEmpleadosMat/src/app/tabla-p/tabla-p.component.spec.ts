import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPComponent } from './tabla-p.component';

describe('TablaPComponent', () => {
  let component: TablaPComponent;
  let fixture: ComponentFixture<TablaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
