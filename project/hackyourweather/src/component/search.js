import React, { useState, useEffect } from "react";
import Cities from "./cityCard";

const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function Search() {
  const [cityName, setCityName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [clickedCount, setClickedCount] = useState(0);
  const [cityIsFound, setCityIsFound] = useState(true);
  const [citiesList, setCitiesList] = useState([]);
  const handleDelete = (id) => {
    const filteredList = citiesList.filter((city) => city.id !== id);
    setCitiesList(filteredList);
    localStorage.setItem("citiesList", JSON.stringify(filteredList));
  };
  const fetchCity = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${KEY}`
    )
      .then((response) => {
        if (response.ok) {
          setError(false);
          setCityIsFound(true);
          return response.json();
        } else if (response.status === 404) {
          setCityIsFound(false);
        } else {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong !");
        }
      })
      .then((data) => {
        setCityName("");
        setLoading(false);
        let dataCity = {
          id: data.id,
          name: `${data.name}`,
          country: `${data.sys.country}`,
          weather: `${data.weather[0].main}`,
          description: `${data.weather[0].description}`,
          max_temp: `${data.main.temp_max}`,
          min_temp: `${data.main.temp_min}`,
          lon: `${data.coord.lon}`,
          lat: `${data.coord.lat}`,
        };
        let dataFromLocalStorage = JSON.parse(
          localStorage.getItem("citiesList") || "[]"
        );
        const filteredDataFromLocalStorage = dataFromLocalStorage.filter(
          (city) => {
            return city.name.toLowerCase() !== cityName.toLowerCase();
          }
        );
        setCitiesList([dataCity, ...filteredDataFromLocalStorage]);
        localStorage.setItem(
          "citiesList",
          JSON.stringify([dataCity, ...filteredDataFromLocalStorage])
        );
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.error(err);
      });
  };
  useEffect(() => {
    if (clickedCount !== 0) fetchCity();
  }, [clickedCount]);

  useEffect(() => {
    setCitiesList(JSON.parse(localStorage.getItem("citiesList") || "[]"));
  }, []);
  return (
    <>
      <div className="input-group">
        <Input cityName={cityName} setCityName={setCityName} />
        <div className="input-group-append">
          <Button
            clickedCount={clickedCount}
            setClickedCount={setClickedCount}
            cityName={cityName}
          />
        </div>
      </div>
      <div>
        {!cityIsFound && (
          <p className="alert alert-danger">Can't find this city !</p>
        )}
      </div>
      <div>
        {cityName === "" && <p>Please write in the field a city name</p>}
      </div>
      <div>{isLoading && <p className="alert alert-light">is loading</p>}</div>
      <div>
        {!hasError && citiesList.length !== 0 && (
          <Cities citiesList={citiesList} handleDelete={handleDelete} />
        )}
      </div>
      <div>
        {hasError && cityIsFound && (
          <p className="alert alert-danger">sorry there is an Error</p>
        )}
      </div>
    </>
  );
}

function Input({ cityName, setCityName }) {
  return (
    <input
      value={cityName}
      onChange={(e) => {
        setCityName(e.target.value);
      }}
      type="text"
      className="form-control"
      placeholder="Search city..."
    />
  );
}
function Button({ clickedCount, setClickedCount, cityName }) {
  return (
    <button
      className="btn btn-secondary"
      type="button"
      onClick={() => setClickedCount(clickedCount + 1)}
      disabled={cityName.length < 1}
    >
      <i className="fa fa-search"></i>
    </button>
  );
}

export default Search;
