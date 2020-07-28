import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Chart from "./chart";

const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function CityDetails() {
  const { cityId } = useParams();
  const history = useHistory();
  const [dataToDraw, setDataToDraw] = useState([]);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchDetails = async (id) => {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${KEY}`
      );
      setLoading(true);
      let fiveDaysData = await data.json();
      setCityName(fiveDaysData.city.name);
      setCountryName(fiveDaysData.city.country);
      let chartData = [];
      for (let i = 0; i < fiveDaysData.list.length; i += 8)
        chartData = [
          ...chartData,
          {
            name: fiveDaysData.list[i].dt_txt.substr(0, 10),
            uv: fiveDaysData.list[i].main.temp,
          },
        ];

      setLoading(false);
      return chartData;
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  function navigateToHome() {
    history.push("/");
  }

  useEffect(() => {
    fetchDetails(cityId).then((data) => setDataToDraw(data));
  }, []);

  return (
    <>
      <div>
        {cityName} , {countryName}
      </div>
      <div>{!isLoading && <Chart dataToDraw={dataToDraw}></Chart>}</div>
      <div>{hasError && <p>Sorry can't load chart</p>}</div>
      <button className="btn btn-primary" onClick={navigateToHome}>
        Home
      </button>
    </>
  );
}

export default CityDetails;
