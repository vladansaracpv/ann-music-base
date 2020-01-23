import { either, none, allFalse, both, allTrue, some, someTrue } from './boolean';

describe('** BOOLEAN FUNCTIONS **', () => {
  describe('\n - either(truthy: any, falsy: any, cond: boolean)', () => {
    test("either('First', 'Second', true) to equal 'First' ", () => {
      expect(either('First', 'Second', true)).toBe('First');
    });
    test("either('First', 'Second', false) to equal 'Second' ", () => {
      expect(either('First', 'Second', false)).toBe('Second');
    });
  });

  describe('\n - none(a: boolean, b: boolean)', () => {
    test('none(true, true) to be false ', () => {
      expect(none(true, true)).toBeFalsy();
    });
    test('none(false, true) to be false ', () => {
      expect(none(false, true)).toBeFalsy();
    });
    test('none(false, false) to be true ', () => {
      expect(none(false, false)).toBeTruthy();
    });
  });

  describe('\n - allFalse(args: boolean[])', () => {
    test('allFalse([false, false, false, false]) to be true ', () => {
      expect(allFalse([false, false, false, false])).toBeTruthy();
    });

    test('allFalse([false, true, false, false]) to be false ', () => {
      expect(allFalse([false, true, false, false])).toBeFalsy();
    });
  });

  describe('\n - both(a: boolean, b: boolean)', () => {
    test('both(true, true) to be true ', () => {
      expect(both(true, true)).toBeTruthy();
    });
    test('both(false, true) to be false ', () => {
      expect(both(false, true)).toBeFalsy();
    });
    test('both(false, false) to be false ', () => {
      expect(both(false, false)).toBeFalsy();
    });
  });

  describe('\n - allTrue(args: boolean[])', () => {
    test('allTrue([true, false, true, true]) to be false ', () => {
      expect(allTrue([true, false, true, true])).toBeFalsy();
    });

    test('allTrue([true, true, true, true]) to be true ', () => {
      expect(allTrue([true, true, true, true])).toBeTruthy();
    });
  });

  describe('\n - some(a: boolean, b: boolean)', () => {
    test('some(true, true) to be true ', () => {
      expect(some(true, true)).toBeTruthy();
    });
    test('some(false, true) to be true ', () => {
      expect(some(false, true)).toBeTruthy();
    });
    test('some(false, false) to be false ', () => {
      expect(some(false, false)).toBeFalsy();
    });
  });

  describe('\n - someTrue(args: boolean[])', () => {
    test('someTrue([true, false, true, true]) to be true ', () => {
      expect(someTrue([true, false, true, true])).toBeTruthy();
    });

    test('someTrue([false, false, false]) to be false ', () => {
      expect(someTrue([false, false, false])).toBeFalsy();
    });
  });
});
