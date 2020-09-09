import { recoverWith, throwError, Stream } from 'most';

interface MapError {
  <A, B, C>(f: (err: B) => C, s: Stream<A>): Stream<A | C>
  <B, C>(f: (err: B) => C): <A>(s: Stream<A>) => Stream<A | C>
}

// @ts-ignore
const mapError: MapError = (f, stream$) => {
  if (stream$ == null) {
    return (stream$: Stream<any>) => mapError(f, stream$);
  }
  return recoverWith((err) => {
    return throwError(f(err));
  }, stream$);
};

export default mapError;
