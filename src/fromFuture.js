import { create } from '@most/create';

const fromFuture = (future) => create((add, end, err) => {
  future.fork(err, (data) => {
    add(data);
    end();
  });
});

export default fromFuture;
