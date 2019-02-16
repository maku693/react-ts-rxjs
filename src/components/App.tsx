import * as React from "react";
import * as Store from "../store";
import { useObservable } from "../utils";

const App: React.FC = () => {
  const count = useObservable(Store.count, null);
  return (
    <p>
      count: {count}
      <br />
      <button onClick={Store.increment}>increment</button>
      <button onClick={Store.decrement}>decrement</button>
    </p>
  );
};

export default App;
