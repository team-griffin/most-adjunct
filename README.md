# most-adjunct

## Documentation

**Note:** All functions in `most-adjunct` are curried.

### ignoreElements
`ignoreElements(stream: Stream): Stream`

Ignore any further elements. Do not emit any more items in this stream. This does not complete the stream.

### switchMap
`switchMap(f: (x: any): Stream, stream: Stream): Stream`

A composition of `map` + `switchLatest`. Will automatically subscribe to the inner stream that is mapped out.

### mapError
`mapError(f: (x): any, stream: Stream): Stream`

If the stream errors this function will allow you to transform the error (via mapping) without recovering the error (catching).

This is useful in situations whereby you have an underlying internal error that you want to make into a human readable error.

### fromEagerPromise
`fromEagerPromise(f(): Promise): Stream`

The problem with `fromPromise` is that promises are eager, and therefore it would have already executed prior to being subscribed to. This function creates a lazy stream version of the promise.

### tapError
`tapError(f(x: any): void, stream: Stream): Stream`

The same as `most.tap` excepts it allows for tapping of items in the error state.