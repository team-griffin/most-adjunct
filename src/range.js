import pipe from 'ramda/src/pipe';
import rRange from 'ramda/src/range';
import { from as fromArray } from 'most';

const range = pipe(
  rRange,
  fromArray,
);

export default range;
