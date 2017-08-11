import r from 'ramda';
import * as most from 'most';

const mfilterc = r.curry(most.filter);

const ignoreElements = (stream$) => r.pipe(
  mfilterc(r.F),
)(stream$);

export default ignoreElements;
