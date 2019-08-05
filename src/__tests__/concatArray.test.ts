import { expect } from 'chai';
import sinon from 'sinon';
import { throwError, recoverWith, of } from 'most';
import concatArray from '../concatArray';
import toArray from '../toArray';

describe('concatArray', function() {
  it('joins multiple streams together', function() {
    const stream = concatArray([
      of('a'),
      of('b'),
      of('c'),
    ]);

    return toArray(stream).observe((arr) => {
      expect(arr).to.deep.equal([ 'a', 'b', 'c' ]);
    });
  });
});
