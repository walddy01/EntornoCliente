import { TestBed } from '@angular/core/testing';

import { ServicioFService } from './servicio-f.service';

describe('ServicioFService', () => {
  let service: ServicioFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
