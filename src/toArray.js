import { mreducec } from './_curried';
import fromEagerPromise from './fromEagerPromise';

const toArray = (stream$) => {
  return fromEagerPromise(() => {
    return mreducec((acc, x) => [
      ...acc,
      x,
    ], [], stream$);
  });
};

export default toArray;