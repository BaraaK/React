import React from "react";
import { Link } from "react-router-dom";

function Cities({ citiesList, handleDelete }) {
  const searchedList = citiesList.map((city, index) => {
    return <City key={index} city={city} handleDelete={handleDelete} />;
  });
  return <ul>{searchedList}</ul>;
}
function City({ city, handleDelete }) {
  return (
    <Card
      handleDelete={handleDelete}
      id={city.id}
      name={city.name}
      country={city.country}
      weather={city.weather}
      description={city.description}
      maxTemp={city.max_temp}
      minTemp={city.min_temp}
      lon={city.lon}
      lat={city.lat}
    />
  );
}

function Card({handleDelete,name , country , id , weather , description, minTemp , maxTemp , lon , lat}) {
  return (
    <div className="card text-white bg-info mb-5 ">
      <div className="card-header">
        <Link className="linkClass" to={`/${id}`}>
          <h1 className="head">
            <span>{name}, &nbsp;</span>
            <span>{country}</span>
          </h1>
        </Link>
        <span>
          <i
            onClick={() => {
              handleDelete(id);
            }}
            className="delete far fa-times-circle"
          ></i>
        </span>
      </div>
      <div className="card-body">
        <h3>{weather}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>min temp : &nbsp;{minTemp}</p>
        <p>max temp : &nbsp;{maxTemp}</p>
        <p>
          Location :<span> &nbsp;{lon} &nbsp;,</span>
          <span> &nbsp;{lat}</span>
        </p>
      </div>
    </div>
  );
}

export default Cities;
