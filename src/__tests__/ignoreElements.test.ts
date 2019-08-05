import { expect } from 'chai';
import sinon from 'sinon';
import { from, Stream } from 'most';
import ignoreElements from '../ignoreElements';

describe('ignoreElements', function() {
  it('filters all events from a stream', function() {
    const stream = from([ 'foo', 'bah' ]);
    const spy = sinon.spy();
    
    return ignoreElements(stream).observe(spy).then(() => {
      expect(spy.called).to.be.false;
    });
  });
});
