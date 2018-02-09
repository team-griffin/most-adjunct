import pipe from 'ramda/src/pipe';
import * as most from 'most';
import { curry2, mmapc } from './_curried';

const switchMap = curry2((f, stream$) => pipe(
  mmapc(f),
  most.switchLatest,
)(stream$));

export default switchMap;
