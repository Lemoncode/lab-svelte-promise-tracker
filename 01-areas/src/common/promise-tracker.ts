import { writable } from "svelte/store";

export const promiseTrackerStore = writable(0);

export function trackPromise<T>(promise: Promise<T>): Promise<T> {
  promiseTrackerStore.update((value) => value + 1);

  promise.finally(() => {
    promiseTrackerStore.update((value) => value - 1);
  });
  return promise;
}
