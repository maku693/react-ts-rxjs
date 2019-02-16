import * as React from "react";
import * as Store from "../store";
import { useObservable } from "../utils";

const App: React.FC = () => {
  const count = useObservable(Store.count, null);
  const uuid = useObservable(Store.uuid, null);
  return (
    <>
      <section>
        <p>
          count: {count}
          <br />
          <button onClick={Store.increment}>increment</button>
          <button onClick={Store.decrement}>decrement</button>
        </p>
      </section>
      <section>
        <p>
          <button onClick={Store.getUUID}>get uuid from httpbin</button>
          <br />
          {uuid === undefined ? "loading" : uuid}
        </p>
      </section>
    </>
  );
};

export default App;
