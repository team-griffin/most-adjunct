import {
  pipe,
  range as rRange,
} from 'ramda';
import { from as fromArray } from 'most';

const range = pipe(
  rRange,
  fromArray,
);

export default range;
