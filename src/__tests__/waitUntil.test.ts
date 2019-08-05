import { expect } from 'chai';
import waitUntil from '../waitUntil';

describe('toArray', function() {
  it('does not emit events until the predicate returns true', function() {
    let x = 0;
    const stream = waitUntil(() => {
      return ++x === 4;
    }, 50).map(() => x);
    return stream.observe((x: number) => {
      expect(x).to.equal(4);
    });
  });
});
