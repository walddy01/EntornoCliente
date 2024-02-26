import { TestBed } from '@angular/core/testing';

import { ServicioAutoService } from './servicio-auto.service';

describe('ServicioAutoService', () => {
  let service: ServicioAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
