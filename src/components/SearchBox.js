import styled from "styled-components";

const Input = styled.input`
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

const SearchBox = ({ onSearchChange, placeholder }) => {
  return (
    <Input type="search" placeholder={placeholder} onChange={onSearchChange} />
  );
};

export default SearchBox;
