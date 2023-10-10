import { TestBed } from '@angular/core/testing';

import { LoggingCliService } from './logging-cli.service';

describe('LoggingCliService', () => {
  let service: LoggingCliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingCliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
