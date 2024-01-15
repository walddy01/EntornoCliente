import { TestBed } from '@angular/core/testing';

import { ServicioPersonaService } from './servicio-persona.service';

describe('ServicioPersonaService', () => {
  let service: ServicioPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
