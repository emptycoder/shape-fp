# Task

This class, based on [data.task](https://github.com/folktale/data.task), is designed to work with asynchronous tasks with an uncertain result.

Its constructor expects a callback that has two function parameters.

The first parameter is a function that rejects the failure result of a task.

The second parameter is a function used to resolve a success result.

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

This helper function creates a ´Task`instance from an asynchronous function that accepts a callback with a failure value of type F and a success value of type S.

## resolve

The `resolved` function creates a `Task` instance that, when forked, will always call the resolution function.

## reject

The `rejected` function creates a `Task` instance that, when forked, will always call the rejection function.

## Class API

### map
The `map` method returns a new Task instance that, in the case of a success, will map the success value of the previous task over the supplied function before resolving the result of the mapping.

### chain
As the name suggests, this method is used to chain a sequence of tasks. It accepts a function that maps its success value to another task and returns a new `Task` instance.

The new task will, when successfully forked, call the supplied function to create and then fork the higher-order task.  

### orElse
The `orElse` method is used to recover from a task that has failed. It accepts a function that maps the error value to another task and returns a new `Task` instance.

In the case of a failure, the new task will call the supplied function to create and then fork the higher-order task.

### fork
The `fork` method finally executes the task with its two parameters, a rejection function and a resolution function, as at arguments of the task function.

### run
This method returns a new Task instance that, when forked successfully, will cause a side-effect using the success value before that value is resolved.