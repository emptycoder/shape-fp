import {Task} from './task'
import {task} from './task'
import parallel = require('run-parallel')
import series = require('run-series')

export class TaskList<F, S> {

    private tasks : ((callback : (F, S) => any) => any)[]

    constructor(tasks : Task<F, S>[]) {

        this.tasks = tasks.map(task =>

            callback => task.fork(
                rejected => callback(rejected, null),
                resolved => callback(null, resolved)
            )
        )

    }

    private createCallback(reject : (f : F) => any, resolve : (s : S[]) => any) {

        return (err, results) => {

            if(err) {

                reject(err)

            }
            else {

                resolve(results)

            }
        }
    }

    series() : Task<F, S[]> {

        return task<F, S[]>((reject, resolve) =>

            series(
                this.tasks,
                this.createCallback(reject, resolve)
            )

        )
    }

    parallel() : Task<F, S[]> {

        return task<F, S[]>((reject, resolve) =>

            parallel(
                this.tasks,
                this.createCallback(reject, resolve)
            )

        )

    }


}

export const taskList = <F, S>(tasks : Task<F, S>[]) => new TaskList(tasks)