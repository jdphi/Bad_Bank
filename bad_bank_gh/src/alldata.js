import NavBar from './navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './context';
import Card from './card';
import bankImg from './bank.png'


function AllData(){
  const ctx = React.useContext(UserContext);

  const [loggedIn, setLoggedIn] = React.useState('');

  function getCurrentUser() {
    return ctx.users[ctx.users.length - 1];
  }

  React.useEffect(() => {
    const currentUser = getCurrentUser();
    setLoggedIn(currentUser.name);
  }, [ctx.users]);

  return (
    <>
    <div>Currently logged in as {loggedIn}</div>
        <Card
        bgcolor='primary'
        txtcolor='black'
        header='All Data'
        text="Here are the changes that have been made to the user's bank account during this session."
        body={(<img src={bankImg} className="img-fluid" alt="Responsive Image"/>)}
    />
    <div>{JSON.stringify(ctx)}</div>
    </>
  );
}

export default AllData;