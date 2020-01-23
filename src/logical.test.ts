import { not } from './logical';

describe('** LOGIC FUNCTIONS **', () => {
  describe('\n - not(a: boolean)', () => {
    test('not(false) to be true ', () => {
      expect(not(false)).toBeTruthy();
    });

    test('not(true) to be false ', () => {
      expect(not(true)).toBeFalsy();
    });
  });
});
