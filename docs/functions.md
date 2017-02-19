# Functions

## forward
The `forward` function takes two function parameters, f and g, and returns a new higher-order function that first applies f and then applies g.

```typescript
const increment = x => x + 1
const square = x => x * x

assert.equal(
    forward(increment, square)(2),
    9)
```

## identity
The `identity` function returns its input as output.

```typescript
assert.equal(
    identity(x),
    x
)
```