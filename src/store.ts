import { BehaviorSubject, Observable } from "rxjs";
import { scan, shareReplay } from "rxjs/operators";

const _count = new BehaviorSubject<number>(0);
export const count: Observable<number> = _count.pipe(
  scan((acc, value) => acc + value),
  shareReplay()
);
export const increment = () => _count.next(1);
export const decrement = () => _count.next(-1);
