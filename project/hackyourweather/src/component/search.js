import React, { useState, useEffect } from 'react';
import City from './cityCard'


const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

function Search() {
    const [city, setCity] = useState ({})
    const [cityName , setCityName] = useState("")
    const [isLoading , setLoading] = useState(false)
    const [hasError , setError] = useState(false)
    const [clickedCount , setClickedCount] = useState(0)
    const [textCount , setInputText] = useState(0)
    const [cityIsFound , setCityIsFound] = useState(true)

    const fetchCity = () => {        
        setLoading(true)
        fetch (`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${KEY}`)
        .then ( response => {
            if(response.ok){
                setError(false)
                setCityIsFound(true)
                return response.json()
            }
            else if(response.status === 404) {
                    setCityIsFound(false)
                    
            }
            else
                {
                    setError(true)
                    setLoading(false)
                    throw new Error ("Something went wrong !")
                }
                
            
        })
        .then( data => {
            setLoading(false)
            setCity(
                {
                name : `${data.name}`,
                country : `${data.sys.country}`,
                weather: `${data.weather[0].main}`,
                description: `${data.weather[0].description}`, 
                max_temp : `${data.main.temp_max}`,
                min_temp : `${data.main.temp_min}`,
                lon : `${data.coord.lon}`,
                lat : `${data.coord.lat}`
                })
            
        })
        .catch(err => {
            setError(true)
            setLoading(false)
            console.error(err);
        })
    }
    
    useEffect(() => {
        if(clickedCount !== 0 && textCount !==0 )
            fetchCity()
    
    },[clickedCount])
    
    
    return (
    <div>
        <div className="input-group">
            <Input cityName = {cityName} setCityName = {setCityName} setInputText={setInputText} textCount={textCount}/>
            <div className="input-group-append">
            <Button clickedCount = {clickedCount} setClickedCount = {setClickedCount}/>
            </div>
        </div>
        <div>{!cityIsFound  && <p className="alert alert-danger">Can't find this city !</p>}</div>
        <div>{textCount===0 && <p>Please write in the field a city name</p>}</div>
        <div>{isLoading && <p className="alert alert-light">is loading</p>}</div>
        <div>{!hasError && textCount!==0 && clickedCount!==0 && <City city={city}/>}</div>
        <div>{hasError && cityIsFound && <p className="alert alert-danger">sorry there is an Error</p>}</div>
        
    </div>
    );
}


function Input ({cityName,setCityName,textCount,setInputText}) {
    return (
        <input value = {cityName} onChange={(e) => { setCityName(e.target.value); setInputText(textCount = (e.target.value.length))}} type="text" className="form-control" placeholder="Search city..."/>

    )
}
function Button ({clickedCount, setClickedCount}) {
    return (
        <button className="btn btn-secondary" type="button" onClick = {() => setClickedCount(clickedCount + 1)}>
            <i className="fa fa-search"></i>
        </button>
    )
}
export default Search;