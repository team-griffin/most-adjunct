import { pipe } from 'ramda';
import * as most from 'most';
import { map } from 'mostc';
import { curry2 } from '@team-griffin/capra';

const switchMap = curry2((f, stream$) => pipe(
  map(f),
  most.switchLatest,
)(stream$));

export default switchMap;
