import { shallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";

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
