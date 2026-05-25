import { memo } from "react";

function Counter({ count }) {

  console.log("Counter Rendered");

  return (
    <h1>
      Count : {count}
    </h1>
  );
}

export default memo(Counter);