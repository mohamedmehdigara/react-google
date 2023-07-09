import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <a href={result.url}>{result.title}</a>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
