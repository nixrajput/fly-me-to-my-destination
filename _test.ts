import { test, expect, describe } from "bun:test";
import { minPlanesToReachLastAirport } from ".";

const testCases = [
  { input: [2, 1, 2, 3, 1], expected: 2 },
  { input: [1, 6, 3, 4, 5, 0, 0, 0, 6], expected: 3 },
  { input: [0], expected: 0 },
  { input: [0, 2, 3], expected: -1 },
  { input: [1, 0, 2, 0, 1], expected: -1 },
  { input: [3, 3, 1, 0, 2, 3, 1], expected: 3 },
  { input: [2, 3, 1, 1, 4], expected: 2 },
  { input: [1, 1, 1, 1, 1], expected: 4 },
  { input: Array(100).fill(1), expected: 99 },
  { input: Array(10000).fill(1), expected: 9999 },
];

describe("Test Min Planes Algorithm", () => {
  testCases.forEach(({ input, expected }, index) => {
    const result = minPlanesToReachLastAirport(input);
    test(`Test case: ${index + 1}`, () => {
      expect(result).toEqual(expected);
    });
  });
});
