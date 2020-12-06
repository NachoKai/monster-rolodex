import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it("should render SearchBox component", async () => {
  expect(shallow(<SearchBox />).length).toEqual(1);
});
