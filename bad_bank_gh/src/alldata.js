import React from 'react';
import { UserContext } from './context';
import Card from './card';
import bankImg from './bank.png';

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div>Currently logged in as {ctx.loggedInUser.name}</div>
      <Card
        bgcolor='primary'
        txtcolor='black'
        header='All Data'
        text="Here are the changes that have been made to the user's bank account during this session."
        body={<img src={bankImg} className="img-fluid" alt="Responsive Image" />}
      />
      <div>{JSON.stringify(ctx)}</div>
    </>
  );
}

export default AllData;
