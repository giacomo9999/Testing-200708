import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../src/configureStore";
import rootReducer from "../src/reducers";

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

export const checkProps = (component, conformingProps) => {
  const testedProps = checkPropTypes(
    component.PropTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(testedProps).toBeUndefined();
};
