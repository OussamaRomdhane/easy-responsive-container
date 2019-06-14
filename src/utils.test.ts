import { isEmpty, isObject } from './utils';

describe('#isEmpty', () => {
  it('should return true if object is empty', () => {
    expect(isEmpty({})).toEqual(true);
  });
  it('should return false if object is not empty', () => {
    expect(isEmpty({ a: 42 })).toEqual(false);
    expect(isEmpty({ a: [42] })).toEqual(false);
  });
  it('should throw if argument is not an object', () => {
    expect(() => isEmpty(function() {})).toThrow();
    expect(() => isEmpty(() => {})).toThrow();
    expect(() => isEmpty([])).toThrow();
  });
});

describe('#isObject', () => {
  it('should return true if object', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject({ a: [42] })).toEqual(true);
  });
  it('should return false if not an object', () => {
    expect(isObject([])).toEqual(false);
    expect(isObject([42])).toEqual(false);
    expect(isObject(42)).toEqual(false);
    expect(isObject(() => {})).toEqual(false);
    expect(isObject(function() {})).toEqual(false);
    expect(isObject('42')).toEqual(false);
    expect(isObject(null)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject(Symbol(42))).toEqual(false);
  });
});
