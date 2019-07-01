import { reduce } from 'mostc';
import { nthArg } from 'ramda';
import fromEagerPromise from './fromEagerPromise';

const valueArg = nthArg(1);

const last = (stream$) => {
  return fromEagerPromise(() => {
    return reduce(valueArg, void 0, stream$);
  });
};

export default last;

// It is possible that this has some performance issues.
// If this is the case we can investigate using `skipUntil` with
// the original stream being its own signal
