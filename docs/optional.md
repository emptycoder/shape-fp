# Optional

The `Optional` monad is used to handle nullable values. There are two cases:

- [Some](./optional/some.md)
- [None](./optional/none.md)

`Some` is a wrapper around a value. `None` is used to represent the null class.
 
The helper function `optional` maps `null` and `undefined` to a `None` instance and wraps an instance of the `Some` monad around everything else. 
  
(Since there is no good way of implementing a generic singleton in TypeScript, optional returns a new None instance.)

`Option` is defined as an interface. `Some` and `None` implement what is required by `Option` (and nothing else).