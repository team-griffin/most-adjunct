import { recoverWith, throwError } from 'most';
import { curry2 } from '@team-griffin/capra';

const mapError = curry2((f, stream) => recoverWith(
  (err) => throwError(f(err)),
  stream,
));

export default mapError;
