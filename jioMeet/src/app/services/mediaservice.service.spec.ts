import { TestBed } from '@angular/core/testing';

import { MediaserviceService } from './mediaservice.service';

describe('MediaserviceService', () => {
  let service: MediaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
