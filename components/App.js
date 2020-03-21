import React from "react";
import SearchForm from "./SearchForm/SearchForm";

export default () => (
  <div>
    <SearchForm onSearchSubmitted={term => console.log(term)} />
  </div>
);
