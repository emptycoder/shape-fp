import {Task} from '../task/task'
import {taskList} from '../task/task_list'
import {TaskList} from '../task/task_list'
import {Box, box} from '../box/box'
import find = require('lodash.find')
import first = require('lodash.first')
import last = require('lodash.last')
import indexOf = require('lodash.indexof')
import includes = require('lodash.includes')
import optional from '../optional/helper'
import Optional from '../optional/optional'
import {none} from '../optional/none'
import {some} from '../optional/some'

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

    filter(p : (x : X) => boolean) : List<X> {

        return new List(this.xs.filter(p))

    }

    first() : Optional<X> {

        return optional(first(this.xs))

    }

    last() : Optional<X> {

        return optional(last(this.xs))

    }

    indexOf(x : X) : Optional<number> {

        return box(indexOf(this.xs, x))
            .fold(index => index == -1 ? none<number>() : some(index))

    }

    find(p : (x : X) => boolean) : Optional<X> {

        return optional(find(this.xs, p))

    }

    contains(x : X) : boolean {

        return includes(this.xs, x)

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