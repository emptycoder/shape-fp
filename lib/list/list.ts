import {Task} from '../task/task'
import {taskList} from '../task/task_list'
import {TaskList} from '../task/task_list'
import {Box, box} from '../box/box'
import first = require('lodash.first')
import optional from '../optional/helper'
import Optional from '../optional/optional'

export class List<X> {

    private xs : X[]

    constructor(xs : X[]) {

        this.xs = xs

    }

    map<Y>(f : (x : X) => Y) : List<Y> {

        return new List(this.xs.map(f))

    }

    chain<Y>(f : (x : X[]) => List<Y>) : List<Y> {

        return f(this.xs)

    }

    fold<Y>(f : (x : X) => Y) : Y[] {

        return this.xs.map(f)

    }

    get () : X[] {

        return this.xs

    }

    filter(f : (x : X) => boolean) : List<X> {

        return new List(this.xs.filter(f))

    }

    first() : Optional<X> {

        const x = first(this.xs)

        return optional(x)

    }

    flatten<Y>(f : (xs : X[]) => Y) : Y {

        return f(this.xs)

    }

    run(f : (array : X[]) => void) {

        f(this.xs)

    }

    taskList<F, S>(f : (x : X) => Task<F, S>) : TaskList<F, S> {

        return taskList(this.xs.map(f))

    }

    box<Y>(f : (xs : X[]) => Y) : Box<Y> {

        return box(f(this.xs))

    }

}

export const list = <X>(array : X[]) => new List(array)