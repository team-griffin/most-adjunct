import { empty, Stream } from 'most';

const concatArray = <T>(arr: Stream<T>[]) => arr.reduce((acc, stream) => {
  return acc.concat(stream);
}, empty() as Stream<T>);

export default concatArray;
