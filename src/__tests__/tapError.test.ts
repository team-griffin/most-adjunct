import { expect } from 'chai';
import sinon from 'sinon';
import { throwError, recoverWith, of } from 'most';
import tapError from '../tapError';

describe('tapError', function() {
  it('taps an error stream', function() {
    const spy = sinon.spy();
    const stream = throwError(new Error('explosion'));
    const map = tapError((err: Error) => {
      spy();
      return new Error(err.message.split('').reverse().join(''));
    });
    
    return recoverWith((err: Error) => of(err.message), map(stream)).observe((x) => {
      expect(x).to.equal('explosion');
      expect(spy.called).to.be.true;
    });
  });
});
