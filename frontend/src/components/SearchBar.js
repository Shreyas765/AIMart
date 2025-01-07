import React, { useState } from 'react';

function SearchBar({ placeholder, onSearch, suggestions }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Trigger the search on every input change
    setShowSuggestions(true); // Show suggestions when the user starts typing
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name); // Set the clicked suggestion as the query
    onSearch(suggestion.name); // Trigger search with the clicked suggestion
    setShowSuggestions(false); // Hide suggestions
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={query}
        onChange={handleInputChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay hiding dropdown for click events
        onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '100%',
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#fff',
            position: 'absolute',
            width: '100%',
            zIndex: 1000,
            maxHeight: '150px',
            overflowY: 'auto',
          }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
