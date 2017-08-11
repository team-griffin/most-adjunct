import { range as rRange, pipe } from 'ramda';
import { from as fromArray } from 'most';

const range = pipe(
  rRange,
  fromArray,
);

export default range;