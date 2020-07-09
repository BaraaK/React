import React from 'react';
import './App.css';
import data from './city-weather.json'
import CityCard from './cityCard';

function App() {
  const cities = data.map(city => {
  return {name : `${city.name}`,
          country : `${city.sys.country}`,
          weather: `${city.weather[0].main}`,
          description: `${city.weather[0].description}`, 
          max_temp : `${city.main.temp_max}`,
          min_temp : `${city.main.temp_min}`,
          lon : `${city.coord.lon}`,
          lat : `${city.coord.lat}`
        }    
  })
    console.log(cities)
  
  
  return (
    <div className="main">
      <CityCard cities = {cities}/>
    </div>
  );

}

export default App;
