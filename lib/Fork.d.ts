export declare type Reject<E> = (error: E) => void;
export declare type Resolve<S> = (success: S) => void;
export declare type Fork<E, S> = (reject: Reject<E>, resolve: Resolve<S>) => void;
