import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogElimComponent } from './cuadro-dialog-elim.component';

describe('CuadroDialogElimComponent', () => {
  let component: CuadroDialogElimComponent;
  let fixture: ComponentFixture<CuadroDialogElimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogElimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogElimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
