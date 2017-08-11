import r from 'ramda';
import * as most from 'most';
import { curry2, mmapc } from './_curried';

const switchMap = curry2((f, stream$) => r.pipe(
  mmapc(f),
  most.switchLatest,
)(stream$));

export default switchMap;
