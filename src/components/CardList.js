import styled from "styled-components";
import Card from "./Card";

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardList = ({ monsters }) => {
  return (
    <List>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </List>
  );
};

export default CardList;
