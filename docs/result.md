# Result

`Result` is a monad that enables error handling. It is also referred to as the `Either` monad.

`Result` is defined as an interface that is implemented by two classes:
- [Failure](./result/failure.md)
- [Success](./result/success.md)

`Success` is a wrapper around the result of a successfully function, while `Failure` is container of an error.

## tryCach

The helper function `tryCatch<F, S>` runs a given function in a try/catch block.

If the function is successfully completed, the result of that function (of type S) is wrapped in a `Success` instance and then returned.

If, however, the function throws an exception, `tryCatch` returns an instance of the `Failure` class wrapped around that exception (of type F).