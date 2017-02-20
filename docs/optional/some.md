# Some

The `Some` class represents the case of definite values. Its counterpart is the [None](none.md) class.

This class should be instantiated using the `some` factory function.

```typescript
some(1)
```

Note that nullable values should be instantiated with the `optional` function.

```typescript
optional(potentiallyNull)
```

## map
For `Some` instances, this method maps the using with the supplied function. 

```typescript
assert.equal(
    some(x).map(x => x + 1).get(),
    x + 1)
```

## fold
The `fold` method requires two functions. For `Some` instances, this method map the value using the second function and returns the result.

```typescript
assert.equal(
    some(x).fold(() => console.log('ignored'), x => x + 1),
    x + 1)
```


## orElse
This method has only an effect on `None` instances. In the case of `Some`, it just returns itself.
 
```typescript
assert.equal(some('A').orElse('B').get(), 'A')
```

## get
The `get` method returns the value that the container is wrapped around.

```typescript
assert.equal(some(x).get(), x)
```

## getOrDefault
In the case of `Some`, the `getOrDefault` method always returns the wrapped value, whereas it returns the default value when called on a `None` instance.

```typescript
assert.equal(some(x).getOrDefault(defaultValue), x)
```

## isDefined
The `isDefined` method always returns `true` for `Some` (and `false` for `None`).

```typescript
assert.isTrue(some(x).isDefined())
```

## isEmpty
The `isEmpty` method always returns `false` for `Some` (and `true` for `None`).
```typescript
assert.isFalse(some(x).isEmpty())
```

## run
Then `run` method is used to execute a side-effect. It is called with two function parameters.

In the case of `Some`, the second function is executed, while the first function is ignored.

The value contained in the `Some` instance is made available to the function that is executed.

```typescript
none()
    .run(
        () => console.log('This is not executed.'),
        x => console.log('This is executed.') 
    )
```

## box
The `box` method returns a box wrapped around the value.