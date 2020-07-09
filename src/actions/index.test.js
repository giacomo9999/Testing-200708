import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
  test("Returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: "CORRECT_GUESS" });
  });
});
