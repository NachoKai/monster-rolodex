import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

const monsterMock = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    website: "test.com",
  },
];

it("should render Card component", async () => {
  expect(shallow(<Card monster={monsterMock} />).length).toEqual(1);
});
