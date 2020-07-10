import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("Returns default initial state of 'false' when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("Returns newState of 'true' when receiving an action of type 'CORRECT_GUESS'", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
