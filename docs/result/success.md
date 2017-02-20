# Failure
The `Success` class represents the success case. Its counterpart is the [None](none.md) class.

The recommended way to instantiate an instance of this class is to use the `failure` function and specify the type parameter, e.g.

```typescript
    success<string, number>(value)
``` 

Note that `success`function expects the types of both the failure value and the success value to be specified.

## map
The `map` method return a new `Success` instance with the value mapped over the supplied function.

## chain
The `chain` method maps the success value to an instance of a Result using the supplied function. This can be used to avoid nested results such (e.g., `Result<F, Result<T>>`).
```typescript
assert.equal(
    success
)
```

## fold

The `fold` method expects two functions as parameters. In the success case, the value is mapped over the second function, while the first function, the "failure map", is ignored.

```typescript
assert.equal(
    success('success value')
        .fold(
            err => 'success map',
            x => 'failure map'
        ),
    'success map')
```

## get
The `get` method returns the success value.

```typescript
assert.equal(
    success(1).get(),
    1
)
```

## run
The `run` method is used to cause a side-effect using the success value.

```typescript
success(1)
    .run(value => console.log('side-effect using the success value'))
```

## toTask
A failure can be mapped to a resolved [Task](../task.md) instance using the `toTask` method.