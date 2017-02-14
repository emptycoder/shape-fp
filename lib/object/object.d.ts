import Dictionary from './dictionary';
export declare function entries<V>(obj: any): [string, V][];
export declare function mapValues<I, O>(input: Dictionary<I>, f: (key: string, value: I) => O): Dictionary<O>;
export declare function fromPairs<T>(pairs: [string, T][]): Dictionary<T>;
