import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: any;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(ApiService);
    httpClientSpy = {
      get:jest.fn()
    }

    service = new ApiService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getData', () => {
    const result = 'response';
    const url = './assets/data/data.json';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(result);
    service.getData(url);
    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getLocalJson', () => {
    const result = 'response';
    const url = './assets/data/data.json';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(result));
    service.getLocalJson();
    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });


});
