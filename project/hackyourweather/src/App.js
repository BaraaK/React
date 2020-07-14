import React from 'react';
import './App.css';
import data from './city-weather.json'
import CityCard from './component/cityCard';
import Search from './component/search'

function App() {
 
  return (
    <div className="main">
      <h1>Weather</h1>
      <div>
        <Search/>
      </div>
    </div>
   

  );

}

export default App;
