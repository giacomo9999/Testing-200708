import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";

import App from "./App";

const setup = shallow(<App />);

test("renders without error", () => {
  expect(findByAttr(setup, "component-app").length).toBe(1);
});
