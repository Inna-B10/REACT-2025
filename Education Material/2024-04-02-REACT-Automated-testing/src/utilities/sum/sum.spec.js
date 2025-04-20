import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  // Inne her skrives alle spesifiksjonene

  it("returns 4 when passed in 2 and 2", () => {
    const result = sum(2, 2);

    expect(result).equal(4);
  });

  it("returns 20 when passed in 10 and 10", () => {
    const result = sum(10, 10);

    expect(result).equal(20);
  });
});
