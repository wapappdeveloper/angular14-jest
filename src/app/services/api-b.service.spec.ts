import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ApiBService } from './api-b.service';

describe('ApiBService', () => {
  let service: ApiBService;
  let httpClientSpy: any

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ApiBService);
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn()
    }
    service = new ApiBService(httpClientSpy);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getData', () => {
    const url = './assets/data/data.json';
    const res = 'Response';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(res);
    service.getData();
    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('test getDataV1 for success', (done) => {
    const url = './assets/data/data.json';
    const res = 'Response';
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV1(url).subscribe({
      next: (data) => {
        console.log(data);
        expect(data).toEqual(res);
        done();
      }, error: (error) => {
        console.log(error);
      }
    });
    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('test getDataV1 for failure', (done) => {
    const url = './assets/data/data.json';
    const errorResponse: HttpErrorResponse = new HttpErrorResponse(
      {
        error: 'test error 404',
        status: 404,
        statusText: 'Not Found'
      }
    )
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));
    service.getDataV1(url).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (error) => {
        console.log(error);
        expect(error.message).toContain('test error 404');
        done();
      }
    });
    //expect(httpClientSpy.get()).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('test postData for success', (done) => {
    const url = './assets/data/data.json';
    const res = 'Response';
    const data = '1234'
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postData(url, data).subscribe({
      next: (data) => {
        console.log(data);
        expect(data).toEqual(res);
        done();
      }, error: (error) => {
        console.log(error);
      }
    });
    expect(httpClientSpy.post).toBeCalled();
    expect(httpClientSpy.post).toBeCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledWith(url, data);
  });

});
