import { intersect, intersects, isEmpty, relativeComplement } from './range';

describe('** RANGE FUNCTIONS **', () => {
  describe('\n - intersect(one: RangeType, other: RangeType)', () => {
    test('intersect({start: 0, end: 10}, {start: 5, end: 15}) to be {start: 5, end: 10} ', () => {
      const range1 = { start: 0, end: 10 };
      const range2 = { start: 5, end: 15 };
      expect(intersect(range1, range2)).toEqual({ start: 5, end: 10 });
    });

    test('intersect({start: 10, end: 15}, {start: 0, end: 5}) to be {start: 0, end: 0} ', () => {
      expect(intersect({ start: 10, end: 15 }, { start: 0, end: 5 })).toEqual({ start: 0, end: 0 });
    });
  });

  describe('\n - isEmpty(range: RangeType)', () => {
    test('isEmpty({start: 0, end: 0}) to be true ', () => {
      expect(isEmpty({ start: 0, end: 0 })).toBeTruthy();
    });

    test('isEmpty({start: 0, end: 10}) to be false ', () => {
      expect(isEmpty({ start: 0, end: 10 })).toBeFalsy();
    });
  });

  describe('\n - intersects(one: RangeType, other: RangeType)', () => {
    test('intersects({start: 0, end: 10}, {start: 5, end: 15}) to be true', () => {
      expect(intersects({ start: 0, end: 10 }, { start: 5, end: 15 })).toBeTruthy();
    });

    test('intersects({ start: 10, end: 15 }, { start: 0, end: 5 }) to be false ', () => {
      expect(intersects({ start: 10, end: 15 }, { start: 0, end: 5 })).toBeFalsy();
    });
  });

  describe('\n - relativeComplement(one: RangeType, other: RangeType)', () => {
    test('relativeComplement({start: 0, end: 10}, {start: 5, end: 15}) to equal [{start: 0, end: 5}]', () => {
      expect(relativeComplement({ start: 0, end: 10 }, { start: 5, end: 15 })).toEqual([{ start: 0, end: 5 }]);
    });

    test('relativeComplement({start: 0, end: 5}, {start: 10, end: 15}) to equal [{start: 0, end: 5}]', () => {
      expect(relativeComplement({ start: 0, end: 5 }, { start: 10, end: 15 })).toEqual([{ start: 0, end: 5 }]);
    });
  });
});
