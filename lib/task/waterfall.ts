import {Task} from './task'

export function createTaskWaterfall<F, S>() {

    return new TaskWaterfallFactory<F, S>()
}

export class TaskWaterfallFactory<F, S> {

    using(f : (S) => Task<F, S>) : UsingTaskWaterfallFactory<F, S> {

        return new UsingTaskWaterfallFactory<F, S>(f)

    }

}

export class UsingTaskWaterfallFactory<F, S> {

    private f : (S) => Task<F, S>

    constructor(f : (S) => Task<F, S>) {

        this.f = f
    }

    times(times : number) : QuantifiedUsingTaskWaterfallFactory<F, S> {

        return new QuantifiedUsingTaskWaterfallFactory<F, S>(this.f, times)

    }

}

export class QuantifiedUsingTaskWaterfallFactory<F, S> {

    private f : (S) => Task<F, S>
    private times : number

    constructor(f : (S) => Task<F, S>, times : number) {

        this.f = f
        this.times = times
    }

    startingWith(value : S) : Task<F, S> {

        let waterfall = this.f(value)

        for (let i = 1; i < this.times; i++) {

            waterfall = waterfall
                .chain(this.f)

        }

        return waterfall

    }

}