# most-adjunct

## Documentation

**Note:** All functions in `most-adjunct` are curried.

### ignoreElements
`ignoreElements(stream: Stream): Stream`

Ignore any further elements. Do not emit any more items in this stream. This does not complete the stream.

### switchMap
`switchMap(f: (x: any): Stream, stream: Stream): Stream`

A composition of `map` + `switchLatest`. Will automatically subscribe to the inner stream that is mapped out.