import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest';

  number = 4;
  string = '1';
  boolean = true;

  array = [1, 2, 3, 4, 5];
  object = { a: 1, b: 2, c: 3 };


  constructor() {
    this.sum(this.number, this.number,);
  }

  sum(a: number, b: number): number {
    return a+b;
  }
  
  sum1(a: number, b: number): number {
    return a+b;
  }
  sum2(a: number, b: number): number {
    return a+b;
  }
  sum3(a: number, b: number): number {
    return a+b;
  }
  sum4(a: number, b: number): number {
    return a+b;
  }
  sum6(a: number, b: number): number {
    return a+b;
  }
  sum5(a: number, b: number): number {
    return a+b;
  }


}
