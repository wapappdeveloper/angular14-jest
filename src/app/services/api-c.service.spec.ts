import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ApiCService } from './api-c.service';

describe('ApiCService', () => {
  let service: ApiCService;
  let httpClientSpy: any;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(ApiCService);
    httpClientSpy = {
      get: jest.fn()
    }

    service = new ApiCService(httpClientSpy);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getData', () => {
    const response = 'Response';
    const url = './assets/data/data.json';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

    service.getData();

    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(url);
  });

  it('should test getDataV1 success', (done) => {
    const response = 'Response';
    const url = './assets/data/data.json';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(response));

    service.getDataV1(url).subscribe({
      next: (data) => {
        console.log(data);
        done();
      },
      error: (error) => {
        console.log(error);
      }
    });

    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(url);
  });

  it.only('should test getDataV1 failure', (done) => {
    const url = './assets/data/data.json';
    const errorResponse: HttpErrorResponse = new HttpErrorResponse(
      {
        error: 'test error 404',
        status: 404,
        statusText: 'Not found'
      }
    )

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errorResponse));

    service.getDataV1(url).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        expect(error.message).toContain('test error 404');
        done();
      }
    });

    expect(httpClientSpy.get).toBeCalled();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(url);
  });



});
