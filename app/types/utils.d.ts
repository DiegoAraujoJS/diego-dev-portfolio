export type ItemType<T> = T extends Readonly<Array<infer R>> ? ItemType<R> : T
