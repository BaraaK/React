import React from 'react';


function City({city}) {
    
    return <Card name = {city.name} country = {city.country} 
        weather={city.weather} description={city.description} maxTemp={city.max_temp}
        minTemp={city.min_temp} lon={city.lon} lat={city.lat}/>

    
}

function Card (props) {
    return (
        <div className="card text-white bg-info mb-5 ">
            <div className="card-header">
                <h1>
                    <span>{props.name}, &nbsp;</span>
                    <span>{props.country}</span>
                </h1>
                
            </div>
            <div className="card-body">
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