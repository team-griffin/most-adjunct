import { unfold } from 'most';

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
    .filter((x) => x === true);
};

export default waitUntil;
