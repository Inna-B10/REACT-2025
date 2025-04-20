import { describe, it, expect } from "vitest";
import { dateDifference } from "./dataDifference";

describe("dataDifference", () => {
  it("to ??? and ??? to return ???", () => {
    const startData = new Date("2024-02-27T09:17:30.367Z");
    const endDate = new Date("2024-02-27T09:17:31.367Z");

    const expectedDifference = [0, 0, 0, 1];

    const result = dateDifference(startData, endDate);

    expect(result).toEqual(expectedDifference);
  });
});
