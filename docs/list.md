# List

The List<T> monad is a wrapper around an array of items of type T.
 
The easiest way to create an instance of this class is to use the helper function `list`.

```typescript
list([1, 2, 3])
```

## map

The `map` method maps the supplied the function over items.
 
```typescript
assert.equal(
    list([ 1, 2, 3]).map(x => x + 1).get(),
    [ 2, 3, 4 ]
)
```
This method provides the index of each item as an optional second parameter.

```typescript
assert.deepEqual(
    instance.map((x, i) => i).get(),
    [ 0, 1, 2 ]
)
```

## chain

The `chain` method first maps each item to a `List` instance and then flattens the list of lists.

```typescript
const f = (x : number) => list([ x-1, x, x + 1])

assert.deepEqual(
    list([1, 2, 3]).chain(f).get(),
    [ 0, 1, 2, 1, 2, 3, 2, 3, 4 ]
)
```

## fold

This method maps the items of the list with supplied function and then returns the new array.

```typescript
assert.deepEqual(
    list([1, 2, 3]).fold(x => x + 1),
    [2, 3, 4])
```

## get

The `get` method return the items that the list contains.

```typescript
assert.deepEqual(
    list([1, 2, 3]).get(),
    [1, 2, 3])
```

## run

Call the `run` method to execute a side-effect on the items contained in the list.
 
```typescript
list([1, 2, 3])
.run(items => console.log('side-effect using the items'))
```

## filter

The `list` method returns all items that satisfy the supplied predicate.

```typescript
assert.deepEqual(
    list([1, 2, 3, 4]).filter(x => x % 2 == 0).get(),
    [2, 4])
```

## first

To return the optional first item of the list, call the `first` method. 

```typescript
assert.isTrue(list([]).first().isEmpty())
assert.equal(list([1, 2, 3]).first().get(), 1)
)
```

## last

The `last` method is identical to `first`, except that it works on the last list item.

```typescript
assert.isTrue(list([]).last().isEmpty())
assert.equal(list([1, 2, 3]).last().get(), 3)
)
```

## contains

The `contains` method return `true` if the list contains the specified value and `false` otherwise.
```typescript
assert.isTrue(list([1, 2]).contains(2))
assert.isNotTrue(list([1, 2]).contains(3))
```

## indexOf

This method optionally returns the first index of the specified value.

```typescript
assert.equal(list([1, 2]).indexOf(1).get(), 0)
assert.isTrue(list([1, 2]).indexOf(3).isEmpty())
```

## find

The `find` method returns the first item that matches a given predicate as an option.

```typescript
const isEven = (x : number) => x % 2 == 0

assert.isTrue(list([]).find(isEven).isEmpty())
assert.isTrue(list([1]).find(isEven).isEmpty())
assert.equal(list([1, 2]).find(isEven).get(), 2)
```

## any

The `any` method returns true if any item matches the given given predicate, and `false` otherwise.

```typescript
assert.isTrue(list([ 1, 2, 3 ]).any(isEvent))
assert.isTrue(list([ 1, 3, 5 ]).any(isEvent))
```

## associate

The `associate` method returns a new list where each item of the existing item is paired with the result of the item mapped over the supplied function.

```typescript
assert.deepEqual(
    list([ 1, 2 ]).associate(x => x * 2).get(),
    [ [1, 2], [2, 4] ]
)
```

## groupBy

The `groupBy` method return a new list with the items arranged as groups based on a key that is computed for every item using the supplied function.
 
```typescript
assert.deepEqual(
    list([1, 1, 2]).groupBy(x => x.toString()).get(),
    { '1': [ 1, 1 ], '2': [ 2 ] }
)
```

## box
The `box` method returns a box with the items of the list flattened by the supplied function.

## taskList
The `taskList` method maps all list items to tasks and returns contained in a TaskList instance.