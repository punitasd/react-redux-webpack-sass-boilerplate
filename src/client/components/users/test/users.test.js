import React from "react";
import { shallow } from "enzyme";

import Users from "../users.jsx";
function setup() {
  return shallow(<Users userList={[]} />);
}

describe("users component test", () => {
  const component = setup();

  it("it should have one ul component", () => {
    expect(component.find("ul").length).toEqual(1);
  });
});
