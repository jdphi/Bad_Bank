import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Balance(){
  const ctx = React.useContext(UserContext);

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>
    <Card
      bgcolor='info'
      header='Current Balance'
      text="Here you can see your most up to date balance"
      body={(
        <div>
          {ctx.loggedInUser.balance ? `Your current balance is: $${ctx.loggedInUser.balance}` : 'You can\'t access a balance if you are not logged in yet. Please create an account or log in.'}
        </div>
      )}
    />
    </>
  )
}

export default Balance;
