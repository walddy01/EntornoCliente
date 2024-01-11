import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVehiculoComponent } from './componente-vehiculo.component';

describe('ComponenteVehiculoComponent', () => {
  let component: ComponenteVehiculoComponent;
  let fixture: ComponentFixture<ComponenteVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
