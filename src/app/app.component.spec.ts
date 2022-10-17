import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('test title',()=>{
    expect(fixture.title).toBe('angular-jest');
  });

  it('test number',()=>{
    expect(fixture.number).toBe(1);
  });

  it('test string',()=>{
    expect(fixture.string).toBe('1');
  });

  it('test boolean',()=>{
    expect(fixture.boolean).toBe(true);
  });

  it('test array',()=>{
    expect(fixture.array).toEqual([1, 2, 3, 4, 5]);
  });

  it('test object',()=>{
    expect(fixture.object).toEqual({ a: 1, b: 2, c: 3 });
  });

  it.only('test method-sum',()=>{
    expect(fixture.sum(1,2)).toBe(3);
  });

});