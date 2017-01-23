import {Task} from '../task/task'
import {taskList} from '../task/task_list'
import {TaskList} from '../task/task_list'

export class List<X> {

    private xs : X[]

    constructor(xs : X[]) {

        this.xs = xs

    }

    map<Y>(f : (X) => Y) : List<Y> {

        return new List(this.xs.map(f))

    }

    chain<Y>(f : (X) => List<Y>) : List<Y> {

        return f(this.xs)

    }

    fold<Y>(f : (X) => Y) : Y[] {

        return this.xs.map(f)

    }

    get () : X[] {

        return this.xs

    }

    run(f : (array : X[]) => void) {

        f(this.xs)

    }

    taskList<F, S>(f : (X) => Task<F, S>) : TaskList<F, S> {

        return taskList(this.xs.map(f))

    }

}

export const list = <X>(array : X[]) => new List(array)