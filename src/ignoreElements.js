import r from 'ramda';
import { mfilterc } from './_curried';

const ignoreElements = (stream$) => r.pipe(
  mfilterc(r.F),
)(stream$);

export default ignoreElements;
