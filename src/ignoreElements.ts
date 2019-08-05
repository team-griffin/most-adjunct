import { pipe, F } from 'ramda';
import { filter } from 'mostc';
import { Stream } from 'most';

type IgnoreElements = <T>(stream: Stream<T>) => Stream<void>;
const ignoreElements = pipe(
  filter(F),
) as IgnoreElements;

export default ignoreElements;
