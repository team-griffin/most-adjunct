import { reduce, Stream } from 'most';
import fromEagerPromise from './fromEagerPromise';

const toArray = <T>(stream$: Stream<T>) => {
  return fromEagerPromise<T[]>(() => {
    return reduce<T, T[]>((acc, x) => [
      ...acc,
      x,
    ], [], stream$);
  });
};

export default toArray;
