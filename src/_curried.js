import * as most from 'most';
import { curryN } from 'ramda';

export const curry2 = r.curryN(2);
export const curry3 = r.curryN(3);

export const mfilterc = curry2(most.filter);
export const mmapc = curry2(most.map);
// export const mscanc = curry3(most.scan);
export const mreducec = curry3(most.reduce);
