import r from 'ramda';
import * as most from 'most';

const curry2 = r.curryN(2);
const mmapc = r.curry(most.map);

const switchMap = curry2((f, stream$) => r.pipe(
  mmapc(f),
  most.switchLatest,
)(stream$));

export default switchMap;
