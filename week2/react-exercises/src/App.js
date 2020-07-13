import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from './ex1-getFriend'
import DogGallery from './ex2-dogGallery'
import Joke from './ex3-jokeGenerator'


function App() {

  return (
    <React.Fragment>
      <Friend/>
      <DogGallery/>
      <Joke/>
    </React.Fragment>
    

  );
}

export default App;
