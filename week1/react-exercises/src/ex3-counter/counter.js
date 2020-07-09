import React, { useState } from 'react';

const initialValue = 0;


const Counter = () =>  {
    var [count , setCount] = useState(initialValue)
    var feedBack = count > 10 ?  "It's higher than 10!" :  "Keep counting..."
    return (
        <div>
            <Button click = {setCount}/>
            <Count value = {count}/>
            <p>{feedBack}</p>
        </div>
    )

}
function Count (props) {
    const count = props.value
    
    
    return (
            <span> &nbsp; {count}</span>
    
    )
    
}
function Button (props) {
    const setCount = props.click
    const increase = () => {
        setCount(preValue => preValue + 1)
    }
    return (
        <button onClick = {increase}>Add 1!</button>
    );
}

export default Counter;