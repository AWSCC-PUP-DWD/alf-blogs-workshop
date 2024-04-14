import React from "react";
import Button from "./Button";
import MainCard from "./MainCard";

import "../styles/CardsContainer.css"

const CardsContainer = ({ isEmpty, filterResult, searchText }) => {
  return (
    <div className="article-cards-container">
      <MainCard />
      {isEmpty ? (
        <div className="no-articles-container">
          <p className="no-articles-heading">Nothing here yet...</p>
          <p className="no-articles-subheading">You can start writing your articles now.</p>
            <Button variant="primary">
              Create Article
            </Button>
        </div>
      ) : filterResult.length === 0 ? (
        <div className="no-articles-container">
          <p className="no-articles-heading">No results found for "{searchText}"</p>
          <p className="no-articles-subheading">Try searching for something else.</p>
        </div>
      ) : (
        filterResult
      )}
    </div>
  );
};

export default CardsContainer;
