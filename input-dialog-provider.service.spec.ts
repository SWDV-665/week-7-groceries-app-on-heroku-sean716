import { TestBed } from '@angular/core/testing';

import { InputDialogProviderService } from './input-dialog-provider.service';

describe('InputDialogProviderService', () => {
  let service: InputDialogProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDialogProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
