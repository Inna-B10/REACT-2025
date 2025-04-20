import { useState } from "react";
import { counterContext } from "./counterContext";

export function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  }

  function decrement() {
    setCount((previousCount) => {
      return previousCount - 1;
    });
  }

  function reset() {
    setCount(0);
  }

  const context = {
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <counterContext.Provider value={context}>
      {props.children}
    </counterContext.Provider>
  );
}
