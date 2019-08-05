import { expect } from 'chai';
import sinon from 'sinon';
import { Stream } from 'most';
import fromEagerPromise from '../fromEagerPromise';

describe('fromEagerPromise', function() {
  it('returns a stream that contains the promise outcome', function() {
    const eagerPromise = sinon.stub().callsFake(() => new Promise<string>((resolve) => {
      resolve('foo');
    }));
    const stream = fromEagerPromise(eagerPromise);

    expect(stream).to.be.instanceof(Stream);
    expect(eagerPromise.called).to.be.false;

    return stream.observe((result) => {
      expect(result).to.equal('foo');
    });
  });
});
