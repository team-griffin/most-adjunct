import { create } from '@most/create';

const fromFuture = <T>(future: any) => create<T>((add, end, err) => {
  future.fork(err, (data: T) => {
    add(data);
    end();
  });
});

export default fromFuture;
