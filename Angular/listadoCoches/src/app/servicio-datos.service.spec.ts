import { TestBed } from '@angular/core/testing';

import { ServicioDatosService } from './servicio-datos.service';

describe('ServicioDatosService', () => {
  let service: ServicioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
