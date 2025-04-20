import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

/**
 * Minimal requirements for a page
 *
 * @param {JSX.Element} PageComponent
 */
export function pageSpecification(PageComponent) {
  afterEach(cleanup);

  describe("should satisfy page requirments and", () => {
    describe("include", () => {
      it("a h1 element", () => {
        // Arrange
        render(<PageComponent />);

        // Assert
        const mainHeading = screen.getByRole("heading", { level: 1 });
        expect(mainHeading).toBeDefined();
      });

      it("a main element", () => {
        // Arrange
        render(<PageComponent />);

        // Assert
        const main = screen.getByRole("main");
        expect(main).toBeDefined();
      });
    });
  });
}
