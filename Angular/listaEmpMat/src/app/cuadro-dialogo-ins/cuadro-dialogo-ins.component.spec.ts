import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoInsComponent } from './cuadro-dialogo-ins.component';

describe('CuadroDialogoInsComponent', () => {
  let component: CuadroDialogoInsComponent;
  let fixture: ComponentFixture<CuadroDialogoInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
