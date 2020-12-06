import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #222;
  border-radius: 1rem;
  background-color: #3b3b3b;

  &:hover {
    background-color: #303030;
    cursor: pointer;
  }
`;

const Name = styled.h2`
  font-weight: 900;
`;

const Image = styled.img`
  margin-bottom: 1rem;
`;

const Data = styled.p`
  margin: 0.2rem 0;
`;

const Card = ({ monster }) => {
  return (
    <Container>
      <Name> {monster.name} </Name>
      <Image
        className="monster-img"
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <Data> {monster.username} </Data>
      <Data> {monster.email} </Data>
      <Data> {monster.website} </Data>
      <Data> {monster.id} </Data>
    </Container>
  );
};

export default Card;
