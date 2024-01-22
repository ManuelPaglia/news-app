import axios from 'axios';
import React, { useState } from 'react';

const SearchBar = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = async (event) => {
    setSearchQuery(event.target.value);

    try {
      var response;
      if (event.target.value == "") {
        response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7eb2e28bad0c474ea2a9e8897426bc21');
      } else {
        response = await axios.get(`https://newsapi.org/v2/everything?q=${event.target.value}&apiKey=7eb2e28bad0c474ea2a9e8897426bc21`);
      }

      console.log(response)
      onChange(response["data"]["articles"])
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='searchbar-container'>
        <input
          type="text"
          placeholder="Cerca..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
    </div>

  );
}

export default SearchBar;