import { create } from '@most/create';

const fromEagerPromise = (f) => {
  return create((add, end, error) => {
    const rawPromise = f();

    return rawPromise.then((data) => {
      add(data);
      end();
    }, error);
  });
};

export default fromEagerPromise;
