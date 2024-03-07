import { TestBed } from '@angular/core/testing';

import { ServicioEmpleadoService } from './servicio-empleado.service';

describe('ServicioEmpleadoService', () => {
  let service: ServicioEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
