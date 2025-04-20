import { useState, useEffect } from "react";

/**
 * A wrapper around local storage for React
 *
 * @param {string} key The key this value gets stored under
 * @param {{
 * initialState?: State
 * serializer?: (this: any, key: string, value: any) => any
 * deserializer?: (this: any, key: string, value: any) => any
 * }?} options
 *
 * @returns {[
 *  State,
 *  React.Dispatch<React.SetStateAction<State>>,
 * ]}
 *
 * @template State Type of variable stored
 */
export function useLocalStorage(key, options) {
  // Store the state in a reactive variable
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key);

    // Use value from local storage if it exists, else initial value
    if (storedState !== null) {
      return JSON.parse(storedState, options?.deserializer);
    } else {
      return options?.initialState ?? null;
    }
  });

  // Whenever the state changes update local storage
  useEffect(() => {
    let serialized = JSON.stringify(state, options?.serializer);
    localStorage.setItem(key, serialized);
  }, [key, state, options?.serializer]);

  return [state, setState];
}
