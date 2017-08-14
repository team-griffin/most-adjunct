import { reduce } from 'ramda';
import { concat } from 'most';

export default reduce((main$, child$) => {
  return (main$ == null) ? child$ : concat(main$, child$)
}, null);
