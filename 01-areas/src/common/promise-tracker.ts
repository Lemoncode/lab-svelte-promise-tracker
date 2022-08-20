import { writable } from "svelte/store";

export const globalAreaKey = "global";

const areaMap = new Map<string, number>([[globalAreaKey, 0]]);

export const promiseTrackerStore = writable<Map<string, number>>(areaMap);

export function trackPromise<T>(
  promise: Promise<T>,
  area: string = "global"
): Promise<T> {
  promiseTrackerStore.update((map) => {
    const value = map.get(area) || 0;

    return map.set(area, value + 1);
  });

  promise.finally(() => {
    promiseTrackerStore.update((map) => map.set(area, map.get(area) - 1));
  });
  return promise;
}
