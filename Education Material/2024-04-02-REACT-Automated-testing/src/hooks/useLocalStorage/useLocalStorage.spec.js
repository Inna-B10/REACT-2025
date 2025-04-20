import { describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

describe("useLocalStorage", () => {
  describe("should initialize to", () => {
    it("inital state when no key is found", () => {
      // Arrange
      const key = "test";
      const initialState = "testing";

      // Act
      const { result } = renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
        })
      );

      // Assert
      expect(result.current[0]).toBe(initialState);
    });

    it("null when no initial state is given and no state is stored", () => {
      // Arrange
      const key = "test";

      // Act
      const { result } = renderHook(() => useLocalStorage(key));

      // Assert
      expect(result.current[0]).toBe(null);
    });

    it("stored state when no initial state is given and state is stored", () => {
      // Arrange
      const key = "test";
      const storedState = "testing";
      localStorage.setItem(key, JSON.stringify(storedState));

      // Act
      const { result } = renderHook(() => useLocalStorage(key));

      // Assert
      expect(result.current[0]).toBe(storedState);
    });

    it("stored state when initial state is given and state is stored", () => {
      // Arrange
      const key = "test";
      const storedState = "testing";
      localStorage.setItem(key, JSON.stringify(storedState));

      // Act
      const { result } = renderHook(() => useLocalStorage(key));

      // Assert
      expect(result.current[0]).toBe(storedState);
    });
  });

  describe("should update the stored state when", () => {
    it("it is called with a new value", () => {
      // Arrange
      const key = "test";
      const initialState = "testing";
      const updatedValue = "this is an update";

      // Act
      const { result, rerender } = renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
        })
      );

      // eslint-disable-next-line
      const [_, setState] = result.current;
      setState(updatedValue);

      // Rerender the hook
      rerender();

      // Assert
      const storedState = JSON.parse(localStorage.getItem(key));
      expect(storedState).toEqual(updatedValue);
    });

    it("it is called with a new values in seequence", () => {
      // Arrange
      const key = "test";
      const initialState = "testing";
      const middleValue = "i am in the middle";
      const finalValue = "this is an update";

      // Act
      const { result, rerender } = renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
        })
      );

      // eslint-disable-next-line
      const [_, setState] = result.current;

      setState(middleValue);
      rerender();

      setState(finalValue);
      rerender();

      // Assert
      const storedState = JSON.parse(localStorage.getItem(key));
      expect(storedState).toEqual(finalValue);
    });

    it("it is called with a new types of values", () => {
      // Arrange
      const key = "test";
      const initialState = "testing";
      const finalValue = { firstName: "Jhon", lastName: "Doe" };

      // Act
      const { result, rerender } = renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
        })
      );

      // eslint-disable-next-line
      const [_, setState] = result.current;

      setState(finalValue);
      rerender();

      // Assert
      const storedState = JSON.parse(localStorage.getItem(key));
      expect(storedState).toEqual(finalValue);
    });
  });

  it("should handle being called with multiple different keys", () => {
    const results = new Array(5).fill().map((_, index) => {
      // Arrange
      const key = "test" + index;
      const initialState = "testing" + index;
      const updatedValue = "this is an update" + index;

      // Act
      const { result, rerender } = renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
        })
      );

      // eslint-disable-next-line
      const [state, setState] = result.current;
      setState(updatedValue);

      // Rerender the hook
      rerender();

      const storedState = JSON.parse(localStorage.getItem(key));

      return {
        expected: updatedValue,
        result: storedState,
      };
    });

    // Assert
    results.forEach((testCase) => {
      expect(testCase.result).toBe(testCase.expected);
    });
  });

  describe("should use the serializer and deserializer when", () => {
    it("given as options", () => {
      // Arrange
      const key = "test";
      const initialState = {
        task: "todo",
        createdAt: new Date("2024-03-02T13:01:24.778Z"),
      };

      const serializer = (key, value) => {
        switch (key) {
          case "createdAt":
            return new Date(value).toISOString();
          default:
            return value;
        }
      };

      const deserializer = (key, value) => {
        switch (key) {
          case "createdAt":
            return new Date(value);
          default:
            return value;
        }
      };

      // Act
      renderHook(() =>
        useLocalStorage(key, {
          initialState: initialState,
          serializer: serializer,
          deserializer: deserializer,
        })
      );

      // Assert
      const storedState = JSON.parse(localStorage.getItem(key), deserializer);
      expect(storedState).toEqual(initialState);
    });
  });
});
