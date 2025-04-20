import { describe, afterEach, it, expect, vi } from "vitest";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { pageSpecification } from "../../tests/specifications/pageSpecification";
import { LandingPage } from "./LandingPage";

afterEach(cleanup);

describe("LandingPage", () => {
  pageSpecification(LandingPage);

  describe("triggers the correct handlers", () => {
    it("updates the note when input is written to", () => {
      // Arrange
      const value = "New note";
      const { getByRole } = render(<LandingPage />);
      const input = getByRole("textbox");

      // Act
      fireEvent.change(input, { target: { value: value } });

      // Assert
      expect(input.value).toBe(value);
      const result = screen.getByDisplayValue(value);
      expect(result.value).toBe(value);
    });

    // There is only one button that is active
    // the others are either in a disabled state
    // or a loading state, so there should only be
    // a single call to the functions heres
    describe("logs to the console when the", () => {
      afterEach(() => {
        vi.resetAllMocks();
      });

      it("info button is pressed", () => {
        // Arrange
        const spy = vi.spyOn(console, "log");

        const { getAllByText } = render(<LandingPage />);
        const infoButtons = getAllByText("#1");

        // Act
        infoButtons.forEach((button) => {
          fireEvent.click(button);
        });

        // Assert
        expect(spy).toBeCalledTimes(1);
      });

      it("action button is pressed", () => {
        // Arrange
        const spy = vi.spyOn(console, "log");

        const { getAllByText } = render(<LandingPage />);
        const infoButtons = getAllByText("#2");

        // Act
        infoButtons.forEach((button) => {
          fireEvent.click(button);
        });

        // Assert
        expect(spy).toBeCalledTimes(1);
      });

      it("destructive button is pressed", () => {
        // Arrange
        const spy = vi.spyOn(console, "log");

        const { getAllByText } = render(<LandingPage />);
        const infoButtons = getAllByText("#3");

        // Act
        infoButtons.forEach((button) => {
          fireEvent.click(button);
        });

        // Assert
        expect(spy).toBeCalledTimes(1);
      });
    });
  });
});
