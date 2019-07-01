import { reduce } from 'mostc';
import fromEagerPromise from './fromEagerPromise';

const toArray = (stream$) => {
  return fromEagerPromise(() => {
    return reduce((acc, x) => [
      ...acc,
      x,
    ], [], stream$);
  });
};

export default toArray;
