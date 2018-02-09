import { unfold } from 'most';
import equals from 'ramda/src/equals';

const waitUntil = (f, interval = 500) => {
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
