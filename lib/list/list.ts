import {Task} from '../task/task'
import {taskList} from '../task/task_list'
import {TaskList} from '../task/task_list'
import {Box, box} from '../box/box'
import find = require('lodash.find')
import first = require('lodash.first')
import last = require('lodash.last')
import indexOf = require('lodash.indexof')
import includes = require('lodash.includes')
import groupBy = require('lodash.groupby')
import flatten = require('lodash.flatten')
import {none} from '../optional/none'
import {some} from '../optional/some'
import {dictionary, Dictionary} from '../dictionary/dictionary'
import {Optional, optional} from '../optional/optional'

export class List<X> {

    constructor(private xs : X[]) {

    }

    map<Y>(f : (x : X, index? : number) => Y) : List<Y> {

        return new List(this.xs.map(f))

    }

    chain<Y>(f : (x : X) => List<Y>) : List<Y> {

        return this
            .map(item => f(item).get()) // List<Y[]>
            .box(items => flatten(items)) // Box<Y[]>
            .fold(list) // List<Y>

    }

    fold<A, Y>(f : (accumulator : A, x : X, index? : number) => A, initial : A) : A {

        return this.xs.reduce(f, initial)

    }

    get () : X[] {

        return this.xs

    }

    forEach(f : (item : X) => void) {

        this.xs.forEach(f)

    }

    run(f : (array : X[]) => void) {

        f(this.xs)

    }

    flatten<Y>(f : (xs : X[]) => Y) : Y {

        return f(this.xs)

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

    contains(x : X) : boolean {

        return includes(this.xs, x)

    }

    indexOf(x : X) : Optional<number> {

        return box(indexOf(this.xs, x))
            .fold(index => index == -1 ? none<number>() : some(index))

    }

    find(p : (x : X) => boolean) : Optional<X> {

        return optional(find(this.xs, p))

    }

    any(f : (x : X) => boolean) : boolean {

        for (const x of this.xs) {

            if(f(x)) {
                return true
            }

        }

        return false
    }

    all(f : (x : X) => boolean) : boolean {

        for (const x of this.xs) {

            if(f(x)) {
                return false
            }

        }

        return true
    }

    associate<Y>(f : (x : X) => Y) : List<[X, Y]> {

        return this.map(x =>

            [ x, f(x) ] as [X, Y]

        )

    }

    groupBy(key : (x : X) => string) : Dictionary<X[]> {

        return dictionary(groupBy(
            this.xs,
            key
        ))

    }

    box<Y>(f : (xs : X[]) => Y) : Box<Y> {

        return box(f(this.xs))

    }

    taskList<F, S>(f : (x : X) => Task<F, S>) : TaskList<F, S> {

        return taskList(this.xs.map(f))

    }

}

export function list <X>(array : X[]) {

    return new List(array)

}