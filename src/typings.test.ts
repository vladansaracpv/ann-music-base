import {
  isNumber,
  isInteger,
  isString,
  isUndefined,
  isUndefinedOrNull,
  isArray,
  isStringArray,
  isObject,
  isBoolean,
  isEmptyObject,
  isFunction,
} from './typings';

describe('** TYPINGS FUNCTIONS **', () => {
  describe('\n - isNumber(obj: any)', () => {
    test("isNumber('value') to be false", () => {
      expect(isNumber('value')).toBeFalsy();
    });
    test('isNumber(5.2) to be true', () => {
      expect(isNumber(5.2)).toBeTruthy();
    });
  });

  describe('\n - isInteger(obj: any)', () => {
    test("isInteger('value') to be false", () => {
      expect(isInteger('value')).toBeFalsy();
    });
    test('isInteger(5.2) to be false', () => {
      expect(isInteger(5.2)).toBeFalsy();
    });
    test('isInteger(5.0) to be true', () => {
      expect(isInteger(5.0)).toBeTruthy();
    });
  });

  describe('\n - isString(obj: any)', () => {
    test("isString('value') to be true", () => {
      expect(isString('value')).toBeTruthy();
    });
    test('isString(5.2) to be false', () => {
      expect(isString(5.2)).toBeFalsy();
    });
  });

  describe('\n - isUndefined(obj: any)', () => {
    test('isUndefined(undefined) to be true', () => {
      expect(isUndefined(undefined)).toBeTruthy();
    });
    test("isUndefined('undefined') to be false", () => {
      expect(isUndefined('undefined')).toBeFalsy();
    });
  });

  describe('\n - isUndefinedOrNull(obj: any)', () => {
    test('isUndefinedOrNull(undefined) to be true', () => {
      expect(isUndefinedOrNull(undefined)).toBeTruthy();
    });
    test('isUndefinedOrNull(null) to be true', () => {
      expect(isUndefinedOrNull(null)).toBeTruthy();
    });
    test("isUndefinedOrNull('undefined') to be false", () => {
      expect(isUndefinedOrNull('undefined')).toBeFalsy();
    });
  });

  describe('\n - isArray(obj: any)', () => {
    test('isArray([]) to be true', () => {
      expect(isArray([])).toBeTruthy();
    });
    test("isArray(['value', 'other']) to be true", () => {
      expect(isArray(['value', 'other'])).toBeTruthy();
    });
    test("isArray('value') to be false", () => {
      expect(isArray('value')).toBeFalsy();
    });
  });

  describe('\n - isStringArray(obj: any)', () => {
    test('isStringArray([]) to be false', () => {
      expect(isStringArray([1, 2])).toBeFalsy();
    });
    test("isStringArray(['value', 'other']) to be true", () => {
      expect(isStringArray(['value', 'other'])).toBeTruthy();
    });
    test("isStringArray([1, 2, 'value']) to be false", () => {
      expect(isStringArray([1, 2, 'value'])).toBeFalsy();
    });
  });

  describe('\n - isObject(obj: any)', () => {
    test('isObject(undefined) to be false', () => {
      expect(isObject(undefined)).toBeFalsy();
    });
    test("isObject('undefined') to be false", () => {
      expect(isObject('undefined')).toBeFalsy();
    });
    test('isObject({a: 1}) to be true', () => {
      expect(isObject({ a: 1 })).toBeTruthy();
    });
  });

  describe('\n - isBoolean(obj: any)', () => {
    test('isBoolean(undefined) to be false', () => {
      expect(isBoolean(undefined)).toBeFalsy();
    });
    test("isBoolean('undefined') to be false", () => {
      expect(isBoolean('undefined')).toBeFalsy();
    });
    test('isBoolean(1==1) to be true', () => {
      // tslint:disable-next-line: triple-equals
      expect(isBoolean(1 == 1)).toBeTruthy();
    });
    test('isBoolean(false) to be true', () => {
      expect(isBoolean(false)).toBeTruthy();
    });
  });

  describe('\n - isEmptyObject(obj: any)', () => {
    test('isEmptyObject(undefined) to be false', () => {
      expect(isEmptyObject(undefined)).toBeFalsy();
    });
    test("isEmptyObject('undefined') to be false", () => {
      expect(isEmptyObject('undefined')).toBeFalsy();
    });
    test('isEmptyObject({a: 1}) to be false', () => {
      expect(isEmptyObject({ a: 1 })).toBeFalsy();
    });
    test('isEmptyObject({}) to be true', () => {
      expect(isEmptyObject({})).toBeTruthy();
    });
  });

  describe('\n - isFunction(obj: any)', () => {
    const fn = a => a + 1;
    test('isFunction(undefined) to be false', () => {
      expect(isFunction(undefined)).toBeFalsy();
    });
    test('isFunction(a => a + 1) to be true', () => {
      expect(isFunction(fn)).toBeTruthy();
    });
  });
});
