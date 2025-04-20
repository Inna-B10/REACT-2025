import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { useCounterContext } from "./useCounterContext";
import { CounterContextProvider } from "./CounterContextProvider";

function TestComponent() {
  const { count, increment, decrement, reset } = useCounterContext();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

afterEach(cleanup);

describe("useCounterContext", () => {
  it("throws an error when used outside of a CounterContextProvider", () => {
    // Arrange
    const outsideContextProvider = () => render(<TestComponent />);

    // Silence React error output
    const originalError = console.error;
    console.error = vi.fn();

    // Assert
    expect(() => outsideContextProvider()).toThrowError();

    // Cleanup
    console.error = originalError;
  });

  it("starts with an initial state of 0", () => {
    // Arrange
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    // Assert
    const result = screen.getByText(/Count:/).textContent;
    expect(result).toBe("Count: 0");
  });

  it("increments the count when the increment button is clicked", () => {
    // Arrange
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    const incrementButton = screen.getByText("increment");

    // Act
    fireEvent(
      incrementButton,
      new MouseEvent("click", {
        bubbles: true,
      })
    );

    // Assert
    const result = screen.getByText(/Count:/).textContent;
    expect(result).toBe("Count: 1");
  });

  it("decrements the count when the decrement button is clicked", () => {
    // Arrange
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    const incrementButton = screen.getByText("decrement");

    // Act
    fireEvent(
      incrementButton,
      new MouseEvent("click", {
        bubbles: true,
      })
    );

    // Assert
    const result = screen.getByText(/Count:/).textContent;
    expect(result).toBe("Count: -1");
  });

  it("resets the count when the reset button is clicked", () => {
    // Arrange
    render(
      <CounterContextProvider>
        <TestComponent />
      </CounterContextProvider>
    );

    const incrementButton = screen.getByText("increment");
    const resetButton = screen.getByText("reset");

    // Act
    for (let times = 0; times < 10; times++) {
      fireEvent(
        incrementButton,
        new MouseEvent("click", {
          bubbles: true,
        })
      );
    }

    fireEvent(
      resetButton,
      new MouseEvent("click", {
        bubbles: true,
      })
    );

    // Assert
    const result = screen.getByText(/Count:/).textContent;
    expect(result).toBe("Count: 0");
  });

  describe("shares the count between", () => {
    it("first consumer to subsequent consumers", () => {
      // Arrange
      render(
        <CounterContextProvider>
          <TestComponent />
          <TestComponent />
        </CounterContextProvider>
      );

      // eslint-disable-next-line
      const [incrementButtonA, _] = screen.getAllByText("increment");

      // Act
      fireEvent(
        incrementButtonA,
        new MouseEvent("click", {
          bubbles: true,
        })
      );

      // Assert
      const [consumerA, consumerB] = screen.getAllByText(/Count:/);
      expect(consumerA.textContent).toEqual(consumerB.textContent);
    });

    it("other consumers to first consumer", () => {
      // Arrange
      render(
        <CounterContextProvider>
          <TestComponent />
          <TestComponent />
        </CounterContextProvider>
      );

      // eslint-disable-next-line
      const [_, incrementButtonB] = screen.getAllByText("increment");

      // Act
      fireEvent(
        incrementButtonB,
        new MouseEvent("click", {
          bubbles: true,
        })
      );

      // Assert
      const [consumerA, consumerB] = screen.getAllByText(/Count:/);
      expect(consumerA.textContent).toEqual(consumerB.textContent);
    });
  });
});
