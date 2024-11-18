import { TestBed } from '@angular/core/testing';

import { JsloaderService } from './jsloader.service';

describe('JsloaderService', () => {
  let service: JsloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
