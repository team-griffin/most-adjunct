import { throwError, Stream } from 'most';

interface TapError {
  <T>(f: (t: any) => any, s: Stream<T>): Stream<T>
  (f: (t: any) => any): <T>(s: Stream<T>) => Stream<T>
}

// @ts-ignore
const tapError: TapError = <T>(f: (t: T) => any, stream$: Stream<T>) => {
  if (stream$ == null) {
    return (stream$: Stream<T>) => tapError(f, stream$);
  }
  return stream$.recoverWith((err: any) => {
    f(err);
    return throwError(err);
  });
};

export default tapError;
