import { Signal } from "@angular/core";

export interface SignalStoreResponse<T> {
    data: Signal<T | null>;
    loading: Signal<boolean>;
    loaded: Signal<boolean>;
}