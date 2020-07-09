import React from 'react';

function City(props) {
    const cities = props.cities
    const cityiesList = cities.map((city,index) => {
        return <Card key={index} name={city.name} country = {city.country} 
        weather={city.weather} description={city.description} maxTemp={city.max_temp}
        minTemp={city.min_temp} lon={city.lon} lat={city.lat}/>
    })
    return (
        <div>{cityiesList}</div>
    )
    
}

function Card (props) {
    return (
        <div className="card">
            <div>
                <h1>
                    <span>{props.name}, &nbsp;</span>
                    <span>{props.country}</span>
                </h1>
                
            </div>
            <div className="weather">
                <h3>{props.weather}</h3>
                <p>{props.description}</p>
            </div>
            <div>
                <p>min temp : &nbsp;{props.minTemp}</p>
                <p>max temp : &nbsp;{props.maxTemp}</p>
                <p>Location :<span> &nbsp;{props.lon} &nbsp;,</span>
                    <span> &nbsp;{props.lat}</span></p>
            </div>
        </div>
    )
}

export default City;