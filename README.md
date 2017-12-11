# most-adjunct

## Documentation

**Note:** All functions in `most-adjunct` are curried.

* [concatArray](#concatArray)
* [fromEagerPromise](#fromeagerpromise)
* [fromFuture](#fromfuture)
* [ignoreElements](#ignoreelements)
* [last](#last)
* [mapError](#maperror)
* [range](#range)
* [switchMap](#switchmap)
* [tapError](#taperror)
* [toArray](#toarray)

### concatArray
`concatArray(arr: Array<Stream>): Stream`

Array variant of `most.concat`, allowing you to concatenate many streams together.

### fromEagerPromise
`fromEagerPromise(f(): Promise): Stream`

The problem with `fromPromise` is that promises are eager, and therefore it would have already executed prior to being subscribed to. This function creates a lazy stream version of the promise.

### fromFuture
`fromFutre(future: Future): Stream`

Converts a future into a stream.

### ignoreElements
`ignoreElements(stream: Stream): Stream`

Ignore any further elements. Do not emit any more items in this stream. This does not complete the stream.

### last
`last(stream: Stream): Stream`

Emits only the last item emitted on the stream (once the inner stream has completed).

*Example:*
```js
const stream = most
  .from([1, 2, 3])
  .thru(mA.last);

stream.observe({
  next: console.log,  
});

// -> 3
```
```
a:      -1-2-3-|
stream: -----3-|
```

### mapError
`mapError(f: (x): any, stream: Stream): Stream`

If the stream errors this function will allow you to transform the error (via mapping) without recovering the error (catching).

This is useful in situations whereby you have an underlying internal error that you want to make into a human readable error.

### range
`range(start: Number, end: Number): Stream`

Create a stream of numbers from start to end.

*Example:*
```js
const stream = mA.range(1, 3);

stream.observe({
  next: console.log,  
});

// -> 1
// -> 2
// -> 3
```

### switchMap
`switchMap(f: (x: any): Stream, stream: Stream): Stream`

A composition of `map` + `switchLatest`. Will automatically subscribe to the inner stream that is mapped out.

### tapError
`tapError(f(x: any): void, stream: Stream): Stream`

The same as `most.tap` excepts it allows for tapping of items in the error state.

### toArray
`toArray(stream: Stream): Stream`

Accumlates all of the items emitted and emits an array of all of those items.

None of the original items are emitted on this new stream.

*Example:*
```js
const stream = most
  .from([1, 2, 3])
  .thru(mA.toArray);

stream.observe({
  next: console.log,  
});

// -> [1, 2, 3]
```

### waitUntil
`waitUntil(f: (): boolean | Promise<boolean>, interval: number = 500): Stream`

Creates a Stream that will only start emitting events when the predecate function returns true.

*Example:*
```js
waitUntil(() => returnTrueOrFalse(), 1000)
  .map(() => {});
```
