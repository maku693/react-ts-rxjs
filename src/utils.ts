import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export function useObservable<T>(observable: Observable<T>, initialState: T) {
  const [state, dispatch] = useState(initialState);
  useEffect(() => {
    const subscription = observable.subscribe(value => {
      dispatch(value);
    });
    return () => subscription.unsubscribe();
  });
  return state;
}
