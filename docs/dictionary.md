# Dictionary

The `Dictionary<V>` class is a monad(-like) wrapper around an object with string keys and values of type V.

An instance of this class can be created using the `dictionary` helper function:

```typescript
dictionary({ 'key': 'value' }).keys()
```

## entries

The `entries` method returns the list of key/value pairs that the underlying object is composed of.
 
```typescript
assert.deepEqual(
    dictionary({ 'a': 1, 'b': 2 }).entries(),
    [ [ 'a', 1 ], [ 'b', 2 ] ]
)
```

## keys

The `keys` method returns the keys of the object.

```typescript
assert.deepEqual(
    dictionary({ 'a': 1, 'b': 2 }).keys(),
    [ 'a', 'b' ]
)
```

## values

The `values` method returns the values of the object.

```typescript
assert.deepEqual(
    dictionary({ 'a': 1, 'b': 2 }).values(),
    [ 1, 2 ]
)
```

## map

Dictionaries can `map` over their entries:

```typescript
assert.deepEqual(
    data.map((k, v) => v + 1).get(),
    { 'a': 2, 'b': 3 }
)
```

## chain

The `chain` method first maps each key/value pair to a Dictionary instance and then flattens the dictionary of dictionaries.

Note that later key/value pairs will override earlier pairs with the same key.

```typescript
assert.deepEqual(
    dictionary({ 'A': 0, 'B': 1 }).chain((k, v) => dictionary({ key1: v, key2: v },)).get(),
    { key1: 1, key2: 1 }
)
```

## fold

The `fold` methods works by first mapping the values over the key/value pairs using the supplied function and then returning the new dictionary.

```typescript
assert.deepEqual(
    dictionary({ 'A': 0, 'B': 1 }).chain((k, v) => dictionary({ key1: v, key2: v },)).get(),
    { key1: 1, key2: 1 }
)
```