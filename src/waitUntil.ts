import { unfold } from 'most';
import { equals } from 'ramda';

const waitUntil = (
  f: () => boolean | Promise<boolean>,
  interval = 500,
) => {
  // @ts-ignore
  return unfold((done) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        Promise
          .resolve(f())
          .then((value) => {
            resolve({
              value,
              seed: value,
              done,
            });
          });
      }, interval);
    });
  }, false)
    .filter(equals(true));
};

export default waitUntil;
