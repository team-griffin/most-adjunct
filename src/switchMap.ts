import { Stream } from 'most';

interface SwitchMap {
  <T, R>(f: (t: T) => Stream<R>, s: Stream<T>): Stream<R>
  <T, R>(f: (t: T) => Stream<R>): (s: Stream<T>) => Stream<R>
}

// @ts-ignore
const switchMap: SwitchMap = <T, R>(f: (t: T) => Stream<R>, stream$?: Stream<T>) => {
  if (stream$ == null) {
    return (stream$: Stream<T>) => switchMap(f, stream$);
  }
  return stream$.map(f).switchLatest();
};

export default switchMap;
