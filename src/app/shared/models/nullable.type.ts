import { Signal, WritableSignal } from "@angular/core";

export type Nullable<T> = T | null | undefined;
export type NullableSignal<T> = Signal<Nullable<T>>;
export type NullableWritableSignal<T> = WritableSignal<Nullable<T>>;