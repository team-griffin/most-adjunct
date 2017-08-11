import { recoverWith, throwError } from 'most';
import { curry2 } from './_curried';

const tapError = curry2((f, stream) => recoverWith(
  (err) => {
    f(err);
    return throwError(err);
  },
  stream,
));

export default tapError;