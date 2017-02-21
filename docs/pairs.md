# Pairs

## Type aliases

This library provides two type aliases for pairs, i.e., arrays of length 2:

```typescript
type StringValuePair<V> = [string, V]
type NumberValuePair<V> = [number, V]
```

## Grouping

Arrays of these two types can be grouped using the first value as the group key:

```typescript
assert.deepEqual(
    groupStringValuePairs([['A', 1], ['B', 2], ['B', 3]]),
    { A: [ 1 ], B: [ 2, 3, ] })
    
assert.deepEqual(
    groupNumberValuePairs([[1, 'A'], [2, 'B'], [1, 'C']]),
    { 1: ['A', 'C'], 2 : ['B'] })            
```