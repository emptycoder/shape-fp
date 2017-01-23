import {Task} from './task'
import {head, tail} from '../array/array'
import {task} from './task'
import {box} from '../box/box'
import parallel = require('run-parallel')

export class TaskList<F, S> {

    private tasks : Task<F, S>[]

    constructor(tasks : Task<F, S>[]) {

        this.tasks = tasks

    }

    series() : Task<F, S> {

        return tail(this.tasks)
            .reduce(
                (series, task) =>

                    series.chain(() => task)

                ,
                head(this.tasks))
    }

    parallel() : Task<F, S[]> {

        return task<F, S[]>((reject, resolve) =>

            parallel(

                this.tasks.map(task =>

                    callback => task.fork(
                        rejected => callback(rejected, null),
                        resolved => callback(null, resolved)
                    )

                ),
                (err, results) => {

                    if(err) {

                        reject(err)

                    }
                    else {

                        resolve(results)

                    }

                }
            )

        )

    }


}

export const taskList = <F, S>(tasks : Task<F, S>[]) => new TaskList(tasks)