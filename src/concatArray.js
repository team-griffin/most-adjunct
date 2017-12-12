import { reduce } from 'ramda';
import { concat } from 'most';

const concatArray = reduce((main$, child$) => {
  return (main$ == null) ? child$ : concat(main$, child$)
}, null);

export default concatArray;
