import { create } from '@most/create';

const fromEagerPromise = <T>(f: () => Promise<T>) => {
  return create<T>((add, end, error) => {
    const rawPromise = f();

    rawPromise.then((data) => {
      add(data);
      end();
    }, error);
  });
};

export default fromEagerPromise;
