# Lazy

`Lazy` is a container of a function that enables delayed computation.

An instance of Lazy can be created through the helper function `lazy` which expects a function parameter:

```typescript
lazy(() => ...) 
```

## map

The `map` is used to build a chain of delayed computation. It takes the current function and returns a new instance of `Lazy` with a new higher-level function that, once it is executed, first executes the lower-level function before processing its results.  

```typescript
const delayedComputation = lazy(() => 1)
    .map((x) => x + 1)
```

The computation in this example is delayed until the `fold` method or the `get`method is called. 

## fold

The `fold` method takes a function parameter, first executes the chain of delayed computation, processes the result with the function has has been passed and finally returns the result.

## get

The `get` method finally executes the chain of computation that has been built up and returns the result.
  
```typescript
assert.equal(
    lazy(() => 1).map((x) => x + 1).get(),
    2) 
```

This is equivalent to:
```typescript
assert.equal(
    lazy(() => 1).fold((x) => x + 1),
    2) 
```

## run

The `run` method processes the chain of delayed computation and then executes a side-effect on the result.

```typescript
lazy(() => 1)
    .map((x) => x + 1)
    .run(x => console.log('side effect using the number 2')
```