import React, { useEffect, useState } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SearchBtnClose,
  SearchInputIcon,
  SearchContent,
} from "./styles/Search.styled";

const Search = ({ show, onClose }) => {
  const [search, setSearch] = useState("");

  const closeHandler = () => {
    setSearch("");
    onClose();
  };

  useEffect(() => {}, []);

  return (
    <SearchContainer show={show}>
      <SearchBtnClose className="bi bi-x-lg" onClick={closeHandler} />
      <SearchInputContainer>
        <SearchContent>
          <SearchInputIcon className="bi bi-search" />
          <SearchInput
            placeholder="Type your search here "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContent>
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default Search;
