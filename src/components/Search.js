import React from "react";
import {
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SearchBtnClose,
  SearchInputIcon,
} from "./styles/Search.styled";

const Search = ({ show, onClose }) => {
  return (
    <SearchContainer show={show}>
      <SearchBtnClose className="bi bi-x-lg" onClick={onClose} />
      <SearchInputContainer>
        <SearchInputIcon className="bi bi-search" />
        <SearchInput placeholder="Type your search here " />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default Search;
