import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { pageSpecification } from "../../../tests/specifications/pageSpecification";
import { AboutPage } from "./AboutPage";

afterEach(cleanup);

describe("AboutPage", () => {
  pageSpecification(AboutPage);

  describe("triggers the correct handlers", () => {
    it("updates the note when input is written to", () => {
      // Arrange
      const value = "New note";
      const { getByRole } = render(<AboutPage />);
      const input = getByRole("textbox");

      // Act
      fireEvent.change(input, { target: { value: value } });

      // Assert
      expect(input.value).toBe(value);
      const result = screen.getByDisplayValue(value);
      expect(result.value).toBe(value);
    });
  });
});
