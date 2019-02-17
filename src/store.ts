import { BehaviorSubject, Subject, merge } from "rxjs";
import { flatMap, map, scan, shareReplay } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const _count = new BehaviorSubject<number>(0);
export const count = _count.pipe(
  scan((acc, value) => acc + value),
  shareReplay()
);
export const increment = () => _count.next(1);
export const decrement = () => _count.next(-1);

const _uuid = new Subject();
export const uuid = merge(
  _uuid,
  _uuid.pipe(
    flatMap(() => ajax.getJSON<{ uuid: string }>("https://httpbin.org/uuid")),
    map(x => x.uuid)
  )
).pipe(shareReplay());
export const getUUID = () => _uuid.next();
