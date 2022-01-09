import { useState } from "react";

import styled from "styled-components";
const Greeting = styled.p`
  color: ${({ primary }) => {
    return primary ? "green" : "red";
  }};
`;

const Search = ({ setSearchTerm }) => {
  const [newSearch, setNewSearch] = useState();

  const handleChange = (event) => {
    const { value } = event.target;

    setNewSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearch);
    setNewSearch("");
  };

  return (
    <section>
      <Greeting primary={true}>hellp from styled</Greeting>
      <Greeting>hellpppp from styled</Greeting>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newSearch} />
        <button>Search</button>
      </form>
    </section>
  );
};

export default Search;
