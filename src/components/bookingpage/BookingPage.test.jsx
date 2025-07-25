import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { initializeTimes, updateTimes } from "./BookingPage.jsx";

beforeAll(() => {
  window.fetchAPI = () => [
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];
});

afterAll(() => {
  delete window.fetchAPI;
});

describe("initializeTimes", () => {
  it("should return the default available times", () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expected);
  });
});

describe("updateTimes", () => {
  it("should return the default times for UPDATE_TIMES action", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UPDATE_TIMES", date: "2023-01-01" };
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes(state, action)).toEqual(expected);
  });

  it("should return the same state for unknown action", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UNKNOWN_ACTION" };
    expect(updateTimes(state, action)).toBe(state);
  });
});
