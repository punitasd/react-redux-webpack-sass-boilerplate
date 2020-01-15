import React from "react";
import { shallow } from "enzyme";

import Users from "../users.jsx";
/**
 * Factory function to create a ShallowWrapper for the Users component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Users {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("it renders without error", () => {
  const wrapper = setup({ userList: [] });
  const usersComponent = findByTestAttr(wrapper, "component-users");
  expect(usersComponent.length).toBe(1);
});

test("it should have one ul elements", () => {
  const wrapper = setup({ userList: [] });
  expect(wrapper.find("ul").length).toBe(1);
});

test("it should have no li elements", () => {
  const wrapper = setup({ userList: [] });
  expect(wrapper.find("li").length).toBe(0);
});
test("it should have 1 li elements", () => {
  const wrapper = setup({ userList: [{ id: 1, name: "firstLi" }] });
  expect(wrapper.find("li").length).toBe(1);
});
