import {
  useState,
  useMemo,
  lazy,
  Suspense
} from "react";

import Counter from "./components/Counter";

const About =
lazy(() =>
  import("./components/About")
);

function App() {

  const [count, setCount] =
  useState(0);

  const square =
  useMemo(() => {

    console.log(
      "Calculating..."
    );

    return count * count;

  }, [count]);


  return (

    <div>

      <Counter
        count={count}
      />

      <h2>
        Square : {square}
      </h2>


      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increase
      </button>


      <Suspense
        fallback={
          <p>Loading...</p>
        }
      >

        <About />

      </Suspense>

    </div>

  );
}

export default App;