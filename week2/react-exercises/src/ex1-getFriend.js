import React, { useState , useEffect } from 'react';

function Frined() {
    const [friend , setFriend] = useState({})
    const [isLoading , setLoading] = useState(false)
    const [hasError , setError] = useState(false)
    const [clickedCount , setClickedCount] = useState(0)

    const getFriend = () => {
        setLoading(true)
        fetch("https://www.randomuser.me/api?results=1")
        .then(response =>{
            if (response.ok)
                return response.json()
            else
                throw new Error (" Sorry something went wrong! ")
        })
        .then(data => {
            setFriend({
                first : `${data.results[0].name.first}`,
                last : `${data.results[0].name.last}`,
                address : `${data.results[0].location.street.name} , ${data.results[0].location.street.number}`,
                country : `${data.results[0].location.country}`,
                email : `${data.results[0].email}`,
                phone : `${data.results[0].phone}`
            })
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
            getFriend()
    },[clickedCount])    
    
    return (
        <div>
           <Button  clickedCount = {clickedCount} setClickedCount = {setClickedCount}/>
           {isLoading && <p>is loading</p>}
           {clickedCount===0 && <p>Click the button to get a friend info</p> }
           {!hasError && clickedCount!==0 && <FriendProfile friend = {friend}/>}
           {hasError && <p>sorry there is an Error</p>}
        </div>
    );
}

function FriendProfile({friend}) {
    let first = friend.first
    let last = friend.last
    let address = friend.address
    let country = friend.country
    let email = friend.email
    let phone = friend.phone
    return (
        <div>
            <ul>
                <li>first name : {first}</li>
                <li>last name : {last}</li>
                <li>address : {address}</li>
                <li>country : {country}</li>
                <li>email : {email}</li>
                <li>phone number : {phone}</li>
            </ul>
        </div>
    );
}

function Button({clickedCount, setClickedCount}) {
    return (
        <div>
            <button onClick = {() => setClickedCount(clickedCount + 1)}> Get a friend!</button>
        </div>
    );
}

export default Frined;