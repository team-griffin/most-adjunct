import { from as fromArray } from 'most';

const range = (start: number, end: number) => {
  const arr: number[] = [];
  // eslint-disable-next-line no-plusplus
  for (let x = start; x < end; x++) {
    arr.push(x);
  }
  return fromArray(arr);
};

export default range;
