import { TestBed } from '@angular/core/testing';

import { MyHelloWorldLibService } from './my-hello-world-lib.service';

describe('MyHelloWorldLibService', () => {
  let service: MyHelloWorldLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHelloWorldLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
