# Task

The `Task` class is designed to work with asynchronous tasks with a result that can either be rejected or resolved. It is based on [data.task](https://github.com/folktale/data.task).

The constructor of this class expects a callback that has two function parameters:
1) The first parameter is a function that rejects the failure result of a task.
2) The second parameter is a function used to resolve a success result.

The failure result is of type F, while the success result is of type S.

The rejection function is of type `(failure : F) => void`, aliased as `Reject<F>`.

The resolution function is of type `(success : s) => void`, aliased as `Resolve<S>`.

Finally, the callback required to instantiate the Task class is of type `(reject : Reject<F>, resolve : Resolve<F>) => void`, aliased as `Fork<F, S>`.

# Facory functions

## task

This is the standard factory function used to create a `Task` instance.

## taskFromPromise

This helper function converts a `Promise` into a `Task`.

## taskFromAsynchronousFunction

This `taskFromAsynchronousFunction` function creates a `Task` instance from an asynchronous function that accepts a callback with a failure value of type F and a success value of type S.

## resolved

The `resolved` function creates a `Task` instance that, when forked, will always call the resolution function.

## reject

The `rejected` function creates a `Task` instance that, when forked, will always call the rejection function.

## Class API

### map
The `map` method returns a new `Task` instance that, in the case of a success, will map the success value of the previous task over the supplied function before resolving the result of the mapping.

### chain
The `chain` method is used to chain together sequences of tasks. It expects as input a function that will map a success value provided by the existing task to a new `Task<F, T>` instance.

Given this input, `chain` returns a new higher-order `Task<F, T>` instance that, when forked, will, in turn, fork the existing lower-order task, and, in the case of a successful completion, apply the supplied function to the success value and fork the result.    

### orElse
The `orElse` method is used to recover from a task that has failed. It accepts a function that maps the error value to an instance of `Task<G, S>`.

Analogously to `chain`, `orElse` returns a new higher-order `Task<G, T>` instance that, when forked, will fork the lower-order task, and, in the case of a failure, apply the supplied function to the failure value and fork the result.

### fork
The `fork` method calls the function contained by a `Task` instance.

The two parameters of the `fork` method, a rejection function of type (alias) `Reject<F>` and a `Resolve<S>` resolution functions, are passed on the task functions as arguments. 

### run
This method returns a new `Task` instance that, when forked successfully, will cause a side-effect using the success value before that value is resolved.