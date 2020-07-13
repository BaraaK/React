import React, { useState , useEffect } from 'react';

function RandomJoke() {
    const [joke , setJoke] = useState({})
    const [isLoading , setLoading] = useState(false)
    const [hasError , setError] = useState(false)
    const [clickedCount , setClickedCount] = useState(0)

    const getJoke = () => {
        setLoading(true)
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response =>{
            
            if (response.ok)
                return response.json()
            else
                throw new Error (" Sorry something went wrong! ")
        })
        .then(data => {
            setJoke({setup : `${data.setup}` , punchline : `${data.punchline}`})
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setError(true)
            setLoading(false)
        })
    }
    useEffect(() => {
        if(clickedCount!==0)
        getJoke()
    },[clickedCount])
    return (
        <div>
            <Button clickedCount = {clickedCount} setClickedCount = {setClickedCount}/>
            {isLoading && <p>is loading</p>}
            {clickedCount===0 && <p>Click the button to get a Joke</p> }
            {!hasError && <div><Joke joke = {joke}/></div>}
            {hasError && <p>sorry there is an Error</p>}
            
        </div>
    );
}


function Joke({joke}) {
    let setup = joke.setup
    let punchline = joke.punchline
    return (
        <div>
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    );
}

function Button({clickedCount, setClickedCount}) {
    return (
        <div>
            <button onClick = {() => setClickedCount(clickedCount + 1)}> Get a Joke!</button>
        </div>
    );
}

export default RandomJoke;