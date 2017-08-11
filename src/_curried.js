import * as most from 'most';
import { curryN } from 'ramda';

export const curry2 = r.curryN(2);

export const mfilterc = curry2(most.filter);
export const mmapc = curry2(most.map);
