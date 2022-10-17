import { TestBed } from '@angular/core/testing';

import { ApiAService } from './api-a.service';

describe('ApiAService', () => {
  let service: ApiAService;
  let httpClientSpy: any = {
    get: jest.fn()
  }

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ApiAService);
    service = new ApiAService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check getData', () => {
    const url = './assets/data/data.json';
    const response = 'Response';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(response);
    service.getData();
    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(url);
  });
});
