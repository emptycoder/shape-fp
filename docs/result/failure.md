# Failure
The `None` class represents the failure case. Its counterpart is the [Success](success.md) class.

The recommended way to instantiate an instance of this class is to use the `failure` function and specify the type parameter, e.g.

```typescript
    failure<string, number>(error)
``` 

Note that the `failure` function expects the types of both the failure value and the success value to be specified.

## map
The map is ignored and a new `Failure` of the appropriate type is returned.

## chain
The `chain` method works like `map`: the supplied is ignored and a new `Failure` instance of the appropriate type is returned.

## fold
The `fold` method expects two functions as parameters. In the failure case, the value is mapped over the first function, while the second function, the "success map", is ignored.

```typescript
assert.equal(
    failure('failure value')
        .fold(
            err => 'failure map',
            x => 'success map'
        ),
    'failure map')
```

## get
The `get` method returns the failure value.

```typescript
assert.equal(
    failure('error message').get(),
    'error message'
)
```

## run
The `run` method is used to cause a side-effect using the failure value.

```typescript
failure(1)
    .run(value => console.log('side-effect using the failure value'))
```

## toTask
A failure can be mapped to a rejected [Task](../task.md) instance using the `toTask` method.