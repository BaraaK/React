import React from 'react';


function Hobby(props) {
    
    return (
            <li>{props.name}</li>
    );
}

function HobbiesList(props) {

    const HobbiesLst = props.HobbiesLst;
    var hobbies = HobbiesLst.map((hobby,index) => <Hobby key={index} name={hobby} />)
    return (
        <ul>
            {hobbies}
        </ul>
    )
    
}

export default HobbiesList;