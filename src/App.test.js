import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = shallow(<App />);

const findByAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

test("renders without error", () => {
  expect(findByAttr(setup, "component-app").length).toBe(1);
});
