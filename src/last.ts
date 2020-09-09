import { Stream } from 'most';
import fromEagerPromise from './fromEagerPromise';

const last = <T>(stream$: Stream<T>) => {
  return fromEagerPromise<T>(() => {
    return stream$.reduce((a, b) => b, void 0);
  });
};

export default last;

// It is possible that this has some performance issues.
// If this is the case we can investigate using `skipUntil` with
// the original stream being its own signal
