import { TestBed } from '@angular/core/testing';

import { ServicioMailService } from './servicio-mail.service';

describe('ServicioMailService', () => {
  let service: ServicioMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
