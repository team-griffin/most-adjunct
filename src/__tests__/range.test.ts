import { expect } from 'chai';
import toArray from '../toArray';
import range from '../range';

describe('range', function() {
  it('creates a strange for a range of numbers', function() {
    const stream = range(2, 7);

    return toArray(stream).observe((arr) => {
      expect(arr).to.deep.equal([ 2, 3, 4, 5, 6 ]);
    });
  });
});
