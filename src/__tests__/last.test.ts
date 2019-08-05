import { expect } from 'chai';
import sinon from 'sinon';
import { from } from 'most';
import last from '../last';

describe('last', function() {
  it('returns the last event from a stream', function() {
    const stream = from([ 'foo', 'bah' ]);
    const spy = sinon.spy();
    
    return last(stream).observe(spy).then(() => {
      expect(spy.called).to.be.true;
      expect(spy.calledOnce).to.be.true;
      expect(spy.lastCall.args[0]).to.equal('bah');
    });
  });
});
