import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div>
      <h1>Idcard</h1>
      <Idcard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Idcard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> 
    </div>
  );
}

export default App;
