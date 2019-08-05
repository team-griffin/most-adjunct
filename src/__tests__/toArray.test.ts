import { expect } from 'chai';
import { throwError, recoverWith, of, from } from 'most';
import toArray from '../toArray';

describe('toArray', function() {
  it('collects all events in an array', function() {
    const stream = from([ 'a', 'b', 'c' ]);
    return toArray(stream).observe((x) => {
      expect(x).to.deep.equal([ 'a', 'b', 'c' ]);
    });
  });
});
