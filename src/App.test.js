import React from "react";
import { shallow } from "enzyme";

import App from "./App";

const setup = shallow(<App />);

const findByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

test("renders without error", () => {
  expect(findByAttr(setup, "component-app").length).toBe(1);
});
