import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

const monstersMock = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    website: "test.com",
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    website: "test.com",
  },
  {
    id: 3,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    website: "test.com",
  },
];

it("should render CardList component", async () => {
  expect(shallow(<CardList monsters={monstersMock} />).length).toEqual(1);
});
