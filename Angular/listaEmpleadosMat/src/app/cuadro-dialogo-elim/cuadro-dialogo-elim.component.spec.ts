import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoElimComponent } from './cuadro-dialogo-elim.component';

describe('CuadroDialogoElimComponent', () => {
  let component: CuadroDialogoElimComponent;
  let fixture: ComponentFixture<CuadroDialogoElimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoElimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoElimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
