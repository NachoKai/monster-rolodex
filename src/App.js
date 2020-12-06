import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import styled from "styled-components";
import "./App.scss";

const Title = styled.h1`
  margin: 32px 0 16px 0;
`;

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchFields] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const onSearchChange = event => {
    setSearchFields(event.target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <Title>Monsters Rolodex</Title>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Search monsters..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
