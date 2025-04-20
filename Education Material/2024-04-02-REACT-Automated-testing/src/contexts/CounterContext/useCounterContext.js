import { counterContext } from "./counterContext";
import { useContext } from "react";

export function useCounterContext() {
  const context = useContext(counterContext);

  if (!context) {
    throw new Error(
      "useCounterContext must be a child of a CounterContextProvider, please check your Component Tree"
    );
  }

  return context;
}
