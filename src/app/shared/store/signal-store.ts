import { CreateSignalOptions, signal, Signal, WritableSignal } from "@angular/core";
import { distinctUntilChanged, finalize, Observable, of, switchMap } from "rxjs";
import { SignalStoreResponse } from "./signal-store-response.model";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { isEqual } from "lodash-es";

export class SignalStore {
    static getSignal<TTrigger, TResult>(trigger: Signal<TTrigger | null>, func: (req: TTrigger) => Observable<TResult | null>): SignalStoreResponse<TResult> {
        const loading = signal(false);
        const loaded = signal(false);

        const trigger$ = toObservable(trigger).pipe(distinctUntilChanged((previous, current) => isEqual(previous, current)),
            switchMap(value => {
                loading.set(true);
                if (value === null) {
                    loading.set(false);
                    loaded.set(true);
                    return of(null)
                }
                if (value === undefined) {
                    loading.set(false);
                    loaded.set(true);
                    return of(undefined)
                }
                return func(value).pipe(finalize(() => {

                    loading.set(false);
                    loaded.set(true);

                }));
            }))
        return { data: toSignal(trigger$) as Signal<TResult | null>, loading, loaded };
    }

    static create<T>(initialValue: T | null, options?: CreateSignalOptions<T | null>): WritableSignal<T | null> {
        return signal(initialValue, options);
    }
}