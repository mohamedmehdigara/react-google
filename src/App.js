import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: 'Example Result 1',
      url: 'https://www.example.com/result1',
      description: 'This is an example search result.',
    },
    {
      id: 2,
      title: 'Example Result 2',
      url: 'https://www.example.com/result2',
      description: 'This is another example search result.',
    },
  ]);
  
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
