import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

const ROOT_ELEMENT_ID = "root";

const setupDOM = () => {
  const root = document.createElement("div");
  root.id = ROOT_ELEMENT_ID;
  document.body.appendChild(root);
};

const tearDownDOM = () => {
  const root = document.getElementById(ROOT_ELEMENT_ID);
  document.body.removeChild(root);
};

describe("main", () => {
  // We are just verifying that there is no smoke, ie a Smoke Test
  // by ensuring that ReactDOM can render our application without crashing
  it("should render without crashing", async () => {
    // Arrange
    setupDOM();

    // Assert
    expect(async () => {
      await import("./main.jsx");
    }).not.toThrow();

    // Clean up
    tearDownDOM();
  });

  // We could also verify that there are certain things
  // happening at the initial render
  describe("should cause these side effects", () => {
    beforeAll(setupDOM);
    afterAll(tearDownDOM);

    it("not log anything to the console", async () => {
      // Arrange
      const spies = [
        vi.spyOn(console, "log"),
        vi.spyOn(console, "warn"),
        vi.spyOn(console, "error"),
      ];

      // Act
      await import("./main.jsx");

      // Assert
      spies.forEach((spy) => {
        expect(spy).toBeCalledTimes(0);
      });
    });
  });
});
