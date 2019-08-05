
declare module '@team-griffin/capra' {
  import * as r from 'ramda';

  function curry2<A, B, R>(fn: (a: A, b: B, ...rest: any[]) => R): r.CurriedFunction2<A, B, R>
  function curry3<A, B, C, R>(fn: (a: A, b: B, c: C, ...rest: any[]) => R): r.CurriedFunction3<A, B, C, R>
}
