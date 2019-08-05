import { expect } from 'chai';
import { throwError, recoverWith, of } from 'most';
import mapError from '../mapError';

describe('mapError', function() {
  it('maps an error stream into another error stream', function() {
    const stream = throwError(new Error('explosion'));
    const map = mapError((err: Error) => {
      return new Error(err.message.split('').reverse().join(''));
    });
    
    return recoverWith((err: Error) => of(err.message), map(stream)).observe((x) => {
      expect(x).to.equal('noisolpxe');
    });
  });
});
