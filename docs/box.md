# Box

`Box` acts as container around a value and can be instantiated with the `box` helper function.
 
 ```typescript
box(x)
```

## map

The `map` method applies a function to the value and returns the result in a new box.

## chain

The `chain` method expects a function that maps the value to a new box as input.

This makes it easy to avoid boxes of boxes in nested computation.

```typescript
box(x)
    .chain(x =>
    
        box(x)
            .map(nested_f)
            .map(nested_g)
    )
    .map(f)
```

Alternatively, you could use:

```typescript
box(x)
    .map(x =>
    
        box(x)
            .map(nested_f)
            .map(nested_g)
            .get()
    )
    .map(f)
```

## fold

`fold` applies a function to the value and returns the result rather than the box.

```typescript

assert.equal(
    box(x).fold(x => x + 1),
    x + 1
)

```

## get

`get` returns the value that is contained in the box without applying a function.

```typescript
assert.equal(
    box(x).get(),
    x
)
```

This is equivalent to:

```typescript
box(x).fold(identity)
```

## run

`run` applies a function to the value inside the box without returning anything. This is used to cause a side-effect.

## attempt

The `attempt` method expects a function that maps the value to an instance of the [Result](./result.md) class as input. 

This is used to execute something over the boxed value that might fail.
 
## list

`list` maps the value to an array wrapped around a [List](./list.md) instance.