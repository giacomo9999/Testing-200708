import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";

import Congrats from "./Congrats";

const defaultProps = { success: false };

const setup = (props = {}, state = null) => {
  const setupProps = { defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  if (state) {
    wrapper.setState({ ...state });
  }
  return wrapper;
};

test("Renders without error", () => {
  expect(findByAttr(setup(), "component-congrats").length.toBe(1));
});
