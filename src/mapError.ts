import { recoverWith, throwError, Stream } from 'most';
import { curry2 } from '@team-griffin/capra';

const mapError = <T>(
  f: (err: T) => any,
  stream$: Stream<any>,
) => recoverWith<any, T>(
  (err) => throwError(f(err)),
  stream$,
);

export default curry2(mapError);
