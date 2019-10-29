import { fillStr, split, splitArrays, join, joinArrays, concat, concatN, compact, toBinary, sort, unique, swap, range, permutations, rotate, mapN } from './arrays';

describe('** ARRAY FUNCTIONS **', () => {
  describe("\n - fillStr(s: string, n: number)", () => {
    test("fillStr('a', 3) to equal 'aaa' ", () => {
      expect(fillStr('a', 3)).toBe('aaa');
    });
  });

  describe("\n - split: (by: string) => (str: string)", () => {
    test("split('')('asd') to equal ['a', 's', 'd'] ", () => {
      const result = ['a', 's', 'd'];
      expect(split('')('asd')).toEqual(result);
    });
  });

  describe("\n - splitArrays: (by: string) => (str: string)", () => {
    test("splitArrays('')(['123','456']) to equal [['1', '2', '3'], ['4', '5', '6']] ", () => {
      const result = [['1', '2', '3'], ['4', '5', '6']];
      expect(splitArrays('')(['123', '456'])).toEqual(result);
    });
  });

  describe("\n - join: (by: string) => (arr: any[])", () => {
    test("join('')(['a', 's', 'd']) to equal 'a-s-d' ", () => {
      expect(join('-')(['a', 's', 'd'])).toEqual('a-s-d');
    });
  });

  describe("\n - joinArrays: (by: string) => (arr: any[][])", () => {
    test("joinArrays('')([[1, 2, 3], [4, 5, 6]]) to equal ['1-2-3', '4-5-6'] ", () => {
      expect(joinArrays('-')([[1, 2, 3], [4, 5, 6]])).toEqual(['1-2-3', '4-5-6']);
    });
  });

  describe("\n - concat: (a: any[], b: any[])", () => {
    test("concat([1], ['2']) to equal [1, '2'] ", () => {
      expect(concat([1], ['2'])).toEqual([1, '2']);
    });
  });

  describe("\n - concatN: (...args: any[])", () => {
    test("concatN([1], ['2'], [3]) to equal [1, '2', 3] ", () => {
      expect(concatN([1], ['2'], [3])).toEqual([1, '2', 3]);
    });
  });

  describe("\n - compact: (array: any[])", () => {
    test("compact([1, 2, null]) to equal [1, 2] ", () => {
      expect(compact([1, 2, null])).toEqual([1, 2]);
    });
  });

  describe("\n - toBinary: (n: number)", () => {
    test("toBinary(64) to equal '1000000' ", () => {
      expect(toBinary(64)).toEqual('1000000');
    });
  });

  describe("\n - sort: (src: any[], fn = n => n)", () => {
    test("sort([1, 3, 0, -2]) to equal [-2, 0, 1, 3] ", () => {
      expect(sort([1, 3, 0, -2])).toEqual([-2, 0, 1, 3]);
    });

    test("sort([{val: 1}, {val: -2}, {val: 0}], n => n.val) to equal [{val: -2}, {val: 0}, {val: 1}] ", () => {
      expect(sort([{ val: 1 }, { val: -2 }, { val: 0 }], n => n.val)).toEqual([{ val: -2 }, { val: 0 }, { val: 1 }]);
    });
  });

  describe("\n - unique: (array: any[])", () => {
    test("unique([1, 1, 0, 1, 2]) to equal [0, 1, 2] ", () => {
      expect(unique([1, 1, 0, 1, 2])).toEqual([0, 1, 2]);
    });
  });

  describe("\n - swap: (arr: any[], a: number, b: number)", () => {
    test("swap([0, 1, 2, 3, 4], 1, 4) to equal [0, 4, 2, 3, 1] ", () => {
      const arr = [0, 1, 2, 3, 4];
      swap(arr, 1, 4);
      expect(arr).toEqual([0, 4, 2, 3, 1]);
    });
  });

  describe("\n - range: (a: number, b: number)", () => {
    test("range(0 , -3) to equal [0, -1, -2, -3] ", () => {
      expect(range(0, -3)).toEqual([0, -1, -2, -3]);
    });

    test("range(0 , 3) to equal [0, 1, 2, 3] ", () => {
      expect(range(0, 3)).toEqual([0, 1, 2, 3]);
    });
  });

  describe("\n - permutations: (array: any[])", () => {
    test("permutations([1, 2, 3]) to equal [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]] ", () => {
      expect(permutations([1, 2, 3])).toEqual([[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]);
    });
  });

  describe("\n - rotate: (n: number, array: any[])", () => {
    test("rotate(3, [0, 1, 2, 3]) to equal [3, 0, 1, 2] ", () => {
      expect(rotate(3, [0, 1, 2, 3])).toEqual([3, 0, 1, 2]);
    });

    test("rotate(-2, [0, 1, 2, 3, 4]) to equal [3, 4, 0, 1, 2] ", () => {
      expect(rotate(-2, [0, 1, 2, 3, 4])).toEqual([3, 4, 0, 1, 2]);
    });
  });

  describe("\n - mapN: (fn: any, array: any[], n: number)", () => {
    test("mapN(n => 2*n, [1, 2, 3], 3) to equal [8, 16, 24] ", () => {
      expect(mapN(n => 2 * n, [1, 2, 3], 3)).toEqual([8, 16, 24]);
    });
  });
});