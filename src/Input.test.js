import React from "react";
import { shallow } from "enzyme";

import { findByAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

/**
 * @function setup
 * @param {Object} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
};

setup();

describe("Render", () => {
  describe("Word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    //   console.log("Wrapper:", wrapper.debug());
    });
    test("Renders component without error", () => {
      const component = findByAttr(wrapper, "component-input");
      //   console.log(component.debug());
      expect(component.length).toBe(1);
    });
    test("Renders input box", () => {
      const inputBox = findByAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("Renders submit button", () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("Word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
      console.log("Wrapper:", wrapper.debug());
    });
    test("Renders component without error", () => {
      const component = findByAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("Does not render input box", () => {
      const inputBox = findByAttr(wrapper, "input-box");
      console.log("Input Box:", inputBox.debug());
      expect(inputBox.length).toBe(0);
    });
    test("Does not render submit button", () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});
