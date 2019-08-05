import {
  pipe,
  range as rRange,
} from 'ramda';
import { from as fromArray, Stream } from 'most';

type Range = (start: number, end: number) => Stream<number>;
const range: Range = pipe(
  rRange,
  // @ts-ignore
  fromArray,
);

export default range;
