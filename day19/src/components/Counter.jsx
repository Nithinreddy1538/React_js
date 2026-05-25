import useCounter from "../hooks/useCounter";

function Counter() {

  const {
    count,
    increase,
    decrease
  } = useCounter();

  return (
    <div>

      <h1>
        Count : {count}
      </h1>

      <button onClick={increase}>
        +
      </button>

      <button onClick={decrease}>
        -
      </button>

    </div>
  );
}

export default Counter;