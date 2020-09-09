import { Stream } from 'most';

const ignoreElements = <T>(stream$: Stream<T>) => stream$.filter(() => false);

export default ignoreElements;
