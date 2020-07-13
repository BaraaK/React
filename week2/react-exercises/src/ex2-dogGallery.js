import React, { useState, useEffect } from 'react';

function DogGallery(props) {
    const [dogPhotos , setDogPhotos] = useState([])
    const [hasPhoto , setGallery] = useState(false)
    const [isLoading , setLoading] = useState(false)
    const [hasError , setError] = useState(false)
    const [clickedCount , setClickedCount] = useState(0)

   const getPhoto = () => {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response =>{
            
            if (response.ok)
                return response.json()
            else
                throw new Error (" Sorry something went wrong! ")
        })
        .then(data => {
            let imgSrc = data.message
            setDogPhotos(dogPhotos => [...dogPhotos , imgSrc])
            setGallery(true)
            setLoading(false)
        })
        .catch(err => {
            console.error(err)
            setError(true)
            setLoading(false)
        })
    }

    useEffect(() => {
        if(clickedCount !==0)
            getPhoto()
    },[clickedCount])
    if(hasPhoto)
    {
        var dogPhotosList = dogPhotos.map((dogPhoto,index) => {
        return <DogPhoto key = {index} imgUrl = {dogPhoto}/>
        })
    }
    
    return (
        <div>
            <Button  clickedCount = {clickedCount} setClickedCount = {setClickedCount}/>
            {isLoading && <p>is loading</p>}
            {!hasPhoto && <p>Get your first dog by clicking the button!</p>}
           {!hasError && hasPhoto && <div>{dogPhotosList}</div>}
           {hasError && <p>sorry there is an Error</p>}
        </div>
    );
}


function DogPhoto({imgUrl}) {
    return (
            <img src={imgUrl} alt="Dog image"/>
    );
}

function Button({clickedCount, setClickedCount}) {
    return (
        <div>
            <button onClick = {() => setClickedCount(clickedCount + 1)}> Get a dog image!</button>
        </div>
    );
}
export default DogGallery;