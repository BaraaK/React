import React, {useState} from 'react';
import HobbyList from './ex1-hobbies/hobbies'
import  './App.css'
import CustomerService from './ex2-component/customer-service'
import FreeShipping from './ex2-component/f-delivery.png'
import MoneyBack from './ex2-component/coin.png'
import OnlineSupport from './ex2-component/chat.png'
import Counter from './ex3-counter/counter'



function print () {
  console.log("clicked")
  return (
    <Counter/>
  )
}

function App() {
  
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  return (
    <div>

      <div>
        <HobbyList HobbiesLst = {hobbies}/>
      </div>

      <div className="serviceComponent">
      <CustomerService img = {FreeShipping} title = "Free shipping" description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <CustomerService img={MoneyBack} title = "100% money back" description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
      <CustomerService img={OnlineSupport} title = "Online Support 24/7" description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    </div>
    
    <div>
      <span><Counter/></span>
    </div>

</div>
  )
}

export default App;
