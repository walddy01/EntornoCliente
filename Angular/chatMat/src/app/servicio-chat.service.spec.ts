import { TestBed } from '@angular/core/testing';

import { ServicioChatService } from './servicio-chat.service';

describe('ServicioChatService', () => {
  let service: ServicioChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
