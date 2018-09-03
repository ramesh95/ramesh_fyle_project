import { TestBed, inject } from '@angular/core/testing';

import { OmdbServicesService } from './omdb-services.service';

describe('OmdbServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbServicesService]
    });
  });

  it('should be created', inject([OmdbServicesService], (service: OmdbServicesService) => {
    expect(service).toBeTruthy();
  }));
});
