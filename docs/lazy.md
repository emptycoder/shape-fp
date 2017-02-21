# Lazy

`Lazy` is a container of a parameterless function that provides a functional approach to delayed computation.

An instance of this function can be created through the helper function `lazy`:

```typescript
lazy(() => ...) 
```

## map

The `map` method is used to build a chain of delayed computation. It takes the current function and returns a new instance of `Lazy` with a higher-level function that, once it is executed, first calls the lower-level function and then processes its result.  

```typescript
const delayedComputation = lazy(() => 1)
    .map((x) => x + 1)
```

The computation is delayed until the `fold` method or the `get` method is called. 

## fold

The `fold` method executes the chain of delayed computation, maps the result using the supplied function and, finally, returns the final value.

## get

The `get` method executes the chain of computation and returns the result without a map. 
  
```typescript
assert.equal(
    lazy(() => 1).get(),
    2) 
```

This is equivalent to calling the `fold`with the [identity function](./functions.md):
```typescript
assert.equal(
    lazy(() => 1).fold(identity),
    2) 
```

## run

The `run` method processes the chain of delayed computation and then causes a side-effect using result.

```typescript
lazy(() => 1)
    .map((x) => x + 1)
    .run(x => console.log('side effect using the number 2')
```