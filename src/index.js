import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAH9wKX6kvj3ffN_WFFJiCuPVXIIOs-a0A'

// Create a new component which produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML and insert into DOM
ReactDOM.render(<App />, document.querySelector('.container'));