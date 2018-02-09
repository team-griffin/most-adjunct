import pipe from 'ramda/src/pipe';
import F from 'ramda/src/F';
import { mfilterc } from './_curried';

const ignoreElements = (stream$) => pipe(
  mfilterc(F),
)(stream$);

export default ignoreElements;
