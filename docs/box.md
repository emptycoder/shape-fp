# Box

`Box` acts as container around a value and can be instantiated with the `box` helper function.
 
 ```typescript
box(x)
```

## map

The `map` method applies a function to the value and returns the output in a new box.

## chain

The `chain` method expects a function as input that maps the value to a new box.

This makes it easier to avoid boxes of boxes in nested computation.

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

`fold` applies a function to the value and returns the output rather than the box.

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

`run` applies a function the value without returning anything. This is used to execute a side-effect on the value.

## attempt

This `attempt` method expects a function as input that maps the value to an instance of the [Result](./result.md) class. 

This used to execute something over the value that might fail.
 
## list

`list` maps the value to an array wrapped around a [List](./list.md).