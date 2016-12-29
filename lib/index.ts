import { Box, box } from './box/box'

import Optional from './optional/optional'
import optional from './optional/helper'
import { Some, some } from './optional/some'
import { None, none } from './optional/none'

import { Result } from './result/result'
import { tryCatch } from './result/helper'
import { Success, success } from './result/success'
import { Failure, failure } from './result/failure'

import { Lazy, lazy } from './lazy/lazy'

import { Fork, Resolve, Reject } from './task/fork'
import { Task, task, taskFromPromise, rejected, resolved } from './task/task'

import { conditionalIo, dontRun, run } from './conditional-io/conditional-io'

import { nth, randomIndex, randomElement } from './array/array'

import identity from './functions/identity'
import forward from './functions/forward'

export { Box, box }

export { Optional, optional }
export { Some, some }
export { None, none }

export { Result }
export { tryCatch }
export { Success, success }
export { Failure, failure }

export { Lazy, lazy }

export { Fork, Resolve, Reject }
export { Task, task, taskFromPromise, rejected, resolved }

export { conditionalIo, dontRun, run }

export { identity }
export { forward }

export { nth, randomIndex, randomElement }