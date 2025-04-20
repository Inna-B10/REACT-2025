import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import style from "./Button.module.css";

describe("Button", () => {
  it("should render any children passed in correctly", () => {
    // Arrange
    render(<Button>Click Me</Button>);

    // Act

    // Assert
    const result = screen.getByText("Click Me");
    expect(result).not.toBeUndefined();
  });

  it("should apply correct styling for the info variant", () => {
    // Arrange
    const { container } = render(<Button variant="info"></Button>);
    const className = style.info;

    // Assert
    const result = container.firstChild.classList.contains(className);
    expect(result).toBe(true);
  });

  it("should apply correct styling for the action variant", () => {
    // Arrange
    const { container } = render(<Button variant="action"></Button>);
    const className = style.action;

    // Assert
    const result = container.firstChild.classList.contains(className);
    expect(result).toBe(true);
  });

  it("should apply correct styling for the destructive variant", () => {
    // Arrange
    const { container } = render(<Button variant="destructive"></Button>);
    const className = style.destructive;

    // Assert
    const result = container.firstChild.classList.contains(className);
    expect(result).toBe(true);
  });

  it("should render the loading variant when in the loading state", () => {
    // Arrange
    const { container } = render(<Button isLoading>Loading Button</Button>);
    const className = style.loading;

    // Assert
    const result = container.firstChild.classList.contains(className);
    expect(result).toBe(true);
  });

  it("should NOT call the onClick handler when clicked and is disabled", () => {
    // Arrange
    const handleClick = vi.fn();
    const { container } = render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );

    // Act
    fireEvent.click(container.firstChild);

    // Assert
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should NOT call the onClick handler when clicked and is loading", () => {
    // Arrange
    const handleClick = vi.fn();
    const { container } = render(
      <Button onClick={handleClick} isLoading>
        Loading Button
      </Button>
    );

    // Act
    fireEvent.click(container.firstChild);

    // Assert
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should call the onClick handler when clicked and is not loading or disabled", () => {
    // Arrange
    const handleClick = vi.fn();
    const { container } = render(
      <Button onClick={handleClick}>Clickable Button</Button>
    );

    // Act
    fireEvent.click(container.firstChild);

    // Assert
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
