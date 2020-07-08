import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";

import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  if (state) {
    wrapper.setState({ ...state });
  }
  return wrapper;
};

test("Renders without error", () => {
  expect(findByAttr(setup(), "component-congrats").length).toBe(1);
});

test("Renders no text when 'success' prop is false", () => {
  expect(findByAttr(setup(), "component-congrats").text()).toBe("");
});

test("Renders non-empty 'congrats' message when 'success' prop is true", () => {
  expect(
    findByAttr(setup({ success: true }, null), "component-congrats").text()
  ).not.toBe("");
});

test("Throws no warning with expected props", () => {
  checkProps(Congrats, { success: false });
});
