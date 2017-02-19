export declare type Entry<V> = [string, V];
export interface StringKeyObject<V> {
    [index: string]: V;
}
export declare function entries<V>(obj: StringKeyObject<V>): Entry<V>[];
export declare function toObject<V>(entries: Entry<V>[]): StringKeyObject<V>;
export declare function groupPairsByFirst<A, B>(array: [string, B][]): StringKeyObject<B[]>;
