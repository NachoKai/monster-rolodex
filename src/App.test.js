import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should render App component", async () => {
  expect(shallow(<App />).length).toEqual(1);
});
