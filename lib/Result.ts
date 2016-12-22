import {success} from './Success'
import {error} from './Error'

export interface Result<E, S> {

    map<T>(f : (S) => T) : Result<E, T>

    fold<F, T>(onError : (E) => F, onSuccess : (S) => T) : F | T

    run<E, S>(onError : (E) => void, onSuccess : (S) => void) : void

}