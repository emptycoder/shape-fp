# Task List

The `TaskList` is designed to run an array of [Task](task.md) instances either in parallel or sequentially.

It connect the Task monad to the functionality provided by [run-series](https://github.com/feross/run-series) and [run-parallel](https://github.com/feross/run-parallel).

The recommended way to instantiate this class is to use the factory function `task`.

A `TaskList` instance is constructed with a callback that is executed as soon as one of these events occurs:
- The entire list of tasks has been completed.
- One task has failed. 

## series

This method runs the given array of tasks sequentially. 

## parallel

This method runs the given array of tasks in parallel.