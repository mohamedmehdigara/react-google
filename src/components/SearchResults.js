import React from 'react';

const SearchResults = ({ results }) => {
    return (
      <div>
        {results.map((result, index) => (
          <div key={result.id}>
            <p>Result {index + 1}</p>
            <a href={result.url}>{result.title}</a>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  };
  

export default SearchResults;
