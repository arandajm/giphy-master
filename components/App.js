import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

const resultsInit = [
  {
    full:
      "https://media3.giphy.com/media/uw3fTCTNMbXAk/giphy.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=giphy.gif",
    thumbnail:
      "https://media3.giphy.com/media/uw3fTCTNMbXAk/100_s.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=100_s.gif"
  },
  {
    full:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/giphy.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=giphy.gif",
    thumbnail:
      "https://media3.giphy.com/media/A8NNZlVuA1LoY/100_s.gif?cid=2d528ef0adf3d6a38f4f597a5fdc62375dcf496befbca2f2&rid=100_s.gif"
  }
];
export default () => (
  <div>
    <SearchForm onSearchSubmitted={term => console.log(term)} />
    <SearchResults results={resultsInit} />
  </div>
);
