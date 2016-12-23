export type Reject<F> = (failure : F) => void
export type Resolve<S> = (success : S) => void

export type Fork<F, S> = (reject : Reject<F>, resolve: Resolve<S>) => void