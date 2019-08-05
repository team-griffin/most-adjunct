import { recoverWith, throwError, Stream } from 'most';
import { curry2 } from '@team-griffin/capra';

const tapError = <T>(
  f: (t: T) => any,
  stream: Stream<T>,
) => recoverWith<any, T>(
  (err) => {
    f(err);
    return throwError(err as any as Error);
  },
  stream,
);

export default curry2(tapError);
