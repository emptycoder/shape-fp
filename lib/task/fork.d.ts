export declare type Reject<F> = (failure: F) => void;
export declare type Resolve<S> = (success: S) => void;
export declare type Fork<F, S> = (reject: Reject<F>, resolve: Resolve<S>) => void;
