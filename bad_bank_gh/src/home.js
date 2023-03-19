import NavBar from './navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './context';
import bankImg from './bank.png'
import Card from './card.js';


function Home(){
  const ctx = React.useContext(UserContext);  

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>
    <Card
            bgcolor='primary'
            txtcolor='black'
            header='Home'
            title='Welcome to Bad Bank!'
            text='You can Login, make Deposits, Withdraw, See your Balance, and more!'
            body={(<img src={bankImg} className="img-fluid" alt="Responsive Image"/>)}
        />
    </>
  );  
}

export default Home;