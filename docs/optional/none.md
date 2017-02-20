# None

The `None` class represents the null case. Its counterpart is the [Some](some.md) class.

The recommended way to instantiate an instance of this class is to use the `none` function and specify the type parameter, e.g.

```typescript
none<number>()
``` 

Note that nullable values should be instantiated with the `optional` function.

```typescript
optional(potentiallyNull)
```

## map
For `None` instances, the `map` does nothing since there is no value to map over.

## fold

## orElse
In the case of `None`, this method returns the supplied value as a new `Optional` instance.
 
```typescript
assert.isTrue(none().orElse(1).isDefined())
assert.isFalse(none().orElse(null).isDefined())
```
 
## get
`None` represents the null case. Its `get` method, therefore, always returns `null`.

```typescript
assert.isNull(none().get())
```

## getOrDefault
In the case of `None`, the `getOrDefault` method always returns the default value, whereas it returns the wrapped value when called on a `Some` instance.

```typescript
assert.equal(none().getOrDefault(defaultValue), defaultValue)
```

## isDefined
The `isDefined` method always returns `false` for `None` (and `true` for `Some`).

```typescript
assert.isFalse(none().isDefined())
```

## isEmpty
The `isEmpty` method always returns `true` for `None` (and `false` for `Some`).
```typescript
assert.isTrue(none().isEmpty())
```

## run
Then `run` method is used to execute a side-effect. It is called with two function parameters.

In the case of `None`, the first function is executed, while the second function is ignored.

No value is made available to the function that is executed.

```typescript
none()
    .run(
        () => console.log('This is executed.'),
        x => console.log('This is not executed.') 
    )
```

## box
The `box` method returns a box wrapped around null.