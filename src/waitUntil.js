import { unfold } from 'most';
import { equals } from 'ramda';

const waitUntil = (f, interval = 500) => {
  return most
    .unfold((done) => {

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
