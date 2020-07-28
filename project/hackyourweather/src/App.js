import React from "react";
import "./App.css";
import data from "./city-weather.json";
import CityCard from "./component/cityCard";
import Search from "./component/search";
import CityDetails from "./CityDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h1>Weather</h1>
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route path="/:cityId" component={CityDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
