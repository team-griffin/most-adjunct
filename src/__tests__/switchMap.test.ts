import { expect } from 'chai';
import sinon from 'sinon';
import { of } from 'most';
import switchMap from '../switchMap';

describe('switchMap', function() {
  it('switches to the inner stream', function() {
    const stream = of(null);
    const map = switchMap(() => of('tada'));

    return map(stream).observe((x) => {
      expect(x).to.equal('tada');
    })
  });
});
