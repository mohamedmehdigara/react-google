import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
