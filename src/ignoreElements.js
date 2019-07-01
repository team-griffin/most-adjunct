import { pipe, F } from 'ramda';
import { filter } from 'mostc';

const ignoreElements = (stream$) => pipe(
  filter(F),
)(stream$);

export default ignoreElements;
