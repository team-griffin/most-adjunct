import { pipe } from 'ramda';
import * as most from 'most';
import { map } from 'mostc';
import { curry2 } from '@team-griffin/capra';

const switchMap = <T, R>(
  f: (t: T) => most.Stream<R>,
  stream$: most.Stream<T>,
) => pipe(
    map(f),
    most.switchLatest,
  )(stream$);

export default curry2(switchMap);
