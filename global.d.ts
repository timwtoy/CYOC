import { Signal, WritableSignal } from "@angular/core";

declare global {
    type Nullable<T> = T | null | undefined;
    type NullableSignal<T> = Signal<Nullable<T>>;
    type NullableWritableSignal<T> = WritableSignal<Nullable<T>>;
}