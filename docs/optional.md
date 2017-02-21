# Optional

The `Optional` monad is used to handle nullable values. It is also known as the Maybe monad or the Option monad. 

`Optional` is defined as an interface that is implemented by two classes:
- [None](./optional/none.md)
- [Some](./optional/some.md)

While `Some` is a wrapper around a value, `None` is used to represent the null class.
 
The helper function `optional` maps `null` and `undefined` to a `None` instance and wraps an instance of the `Some` monad around everything else. 
  
(Since there is no good way of implementing a generic singleton in TypeScript, `optional` returns a new `None` instance.)