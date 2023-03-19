import React from 'react';
import { UserContext } from './context';
import Card from './card';
import bankImg from './bank.png'

function About(){
    const ctx = React.useContext(UserContext);  

    return (
        <Card
            bgcolor='primary'
            txtcolor='black'
            header='About Us'
            text='Welcome to Bad Bank! This is a faux online banking application that runs fully on the client side. This bank has no security
            and does not have accurate data. This is a project that is meant to show the skills of a beginner React developer.'
            body={(<img src={bankImg} className="img-fluid" alt="Responsive Image"/>)}
        />
    )
}

export default About;