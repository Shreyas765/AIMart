import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import logo from './assets/Logo.png';
import './components/SearchBar.css';
import './components/logo.css';
import './components/welcomeText.css';

function App() {
  const [models, setModels] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]); // Suggestions for the dropdown

  // Fetch models from the backend API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/aimodels/')
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
        setSearchResults(data); // Initialize search results with full data
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  // Search handler
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(models);
      setSuggestions([]);
      return;
    }

    const results = models.filter((model) =>
      model.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setSuggestions(results.slice(0, 5)); // Show up to 5 suggestions
  };

  return (
    <div style={{ padding: '20px' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          borderBottom: '1px solid #ccc',
        }}
      >
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="AIMart" className="logo" />
        </div>

        {/* Centered Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <SearchBar
              placeholder="Search for an AI model..."
              onSearch={handleSearch}
              suggestions={suggestions}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: '#f5f5f5',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
          <button
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cart
          </button>
        </div>
      </header>

      {/* Dropdown menu for the search bar*/}
      <div style={{ marginTop: '20px' }}>
      {searchResults.length === 0 && <p>No results found</p>}
    </div>
    {/* Welcome Text: */}
    <div className="welcome-text">
      {/*<span style={{color: 'black'}}>Welcome to </span>*/}
      <span style={{fontWeight: 'bold'}}>AI</span> 
      <span style={{color: 'black'}}>Mart</span> 
    </div>
    <div className="slogan-text">Shop for Intelligence</div>
    </div>
  );
}

{/*The blue color in logo: #0097B2 */}

export default App;
