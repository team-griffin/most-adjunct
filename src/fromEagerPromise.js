import { create } from '@most/create';

const fromEagerPromise = (f) => {
  return create((add, end, error) => {
    return Promise.resolve()
      .then(f)
      .then((data) => {
        add(data);
        end();
      }, error);
  });
};

export default fromEagerPromise;
