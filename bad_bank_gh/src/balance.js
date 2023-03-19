import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Balance(){
  const ctx = React.useContext(UserContext);

  const [loggedIn, setLoggedIn] = React.useState('');
  const [balance, setBalance] = React.useState('');

  React.useEffect(() => {
    // Find the most recently logged-in user
    const currentUser = ctx.users[ctx.users.length - 1];
    setLoggedIn(currentUser.name);
    setBalance(currentUser.balance);
  }, [ctx.users]);

  return (
    <>
    <div>Currently logged in as {loggedIn}</div>
    <Card
      bgcolor='info'
      header='Current Balance'
      text="Here you can see your most up to date balance"
      body={(
        <div>
          Your current balance is: ${balance}
        </div>
      )}
    />
    </>
  )
}

export default Balance;