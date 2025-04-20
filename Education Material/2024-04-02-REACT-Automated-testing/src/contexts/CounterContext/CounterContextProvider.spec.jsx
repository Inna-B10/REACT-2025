import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterContextProvider } from "./CounterContextProvider";

describe("CounterContextProvider", () => {
  it("should render it's children correctly", () => {
    // Arrange
    const child = <h1>child</h1>;
    // Act
    render(<CounterContextProvider>{child}</CounterContextProvider>);
    // Assert
    const result = screen.getByText("child");
    expect(result).not.toBeUndefined();
  });
});
