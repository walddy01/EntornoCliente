import { TestBed } from '@angular/core/testing';

import { ServicioHotelService } from './servicio-hotel.service';

describe('ServicioHotelService', () => {
  let service: ServicioHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
