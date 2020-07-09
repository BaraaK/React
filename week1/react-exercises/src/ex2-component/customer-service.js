import React from 'react';
import  '../App.css'

function CustomerService(props) {
    return (
        <div className="Service">
            <img src={props.img} alt="service photo"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default CustomerService;