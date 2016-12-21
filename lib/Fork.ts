export type Reject<E> = (error : E) => void
export type Resolve<S> = (success : S) => void

export type Fork<E, S> = (reject : Reject<E>, resolve: Resolve<S>) => void