import * as most from 'most';
import curryN from 'ramda/src/curryN';

export const curry2 = curryN(2);
export const curry3 = curryN(3);

export const mfilterc = curry2(most.filter);
export const mmapc = curry2(most.map);
// export const mscanc = curry3(most.scan);
export const mreducec = curry3(most.reduce);
