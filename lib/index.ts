import { Box, box } from './box/box'
import Optional from './optional/optional'
import optional from './optional/helper'
import { Some, some } from './optional/some'
import { None, none } from './optional/none'
import { Lazy, lazy } from './lazy/lazy'
import { Fork, Resolve, Reject } from './task/fork'
import { Task, task, rejected, resolved } from './task/task'
import { Result } from './result/result'
import { Success, success } from './result/success'
import { Failure, failure } from './result/failure'
import { nth, randomIndex, randomElement } from './array/array'
import identity from './identity/identity'

export { Box, box }
export { Optional, optional }
export { Some, some }
export { None, none }
export { Lazy, lazy }
export { Task, task }
export { Fork, Resolve, Reject, rejected, resolved }
export { Result }
export { Success, success }
export { Failure, failure }
export { identity }
export { nth, randomIndex, randomElement }