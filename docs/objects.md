# Objects

## Type aliases

This library provides two type aliases for objects.

The firs alias can be used for object with string keys:

```typescript
type StringKeyObject<V> = {

    [index: string]: V

}
```

The second type alias is defined for objects with number keys: 

```typescript
type NumberKeyObject<V> = {

    [index: number]: V

}
```

## entries

The `entries` function returns the entries of a given object as an array of [StringValuePair<V>](pairs.md).
 
```typescript
assert.deepEqual(
    entries({ id: '1'}),
    [ [ 'id', '1' ] ]
)
```

##

The `toObject` function is the inverse of `entries`. It maps an array of `StringValuePair<V>` items to an object.

```typescript
assert.deepEqual(
    toObject(entries(obj)),
    obj
)

assert.deepEqual(
    entries(toObject(pairs)),
    pairs
)
```