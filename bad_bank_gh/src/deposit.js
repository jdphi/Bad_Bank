import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Deposit(){
  const ctx = React.useContext(UserContext);

  const [amount, setAmount] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState('');

  function getCurrentUser() {
    return ctx.users[ctx.users.length - 1];
  }

  function getCurrentUserBalance() {
    const currentUser = getCurrentUser();
    return currentUser.balance
  }

  React.useEffect(() => {
    const currentUser = getCurrentUser();
    setLoggedIn(currentUser.name);
  }, [ctx.users]);

  function handleDeposit() {
    // Find the most recently logged-in user
    const currentUser = getCurrentUser()
    // Validate the deposit amount  
    if (!amount || amount <= 0) {
      setStatus('Invalid deposit amount');
      setAmount('');
      return;
    }

    // Update the user's balance and reset the form
    currentUser.balance += parseFloat(amount);
    setAmount('');
    setStatus(`Successfully deposited $${amount}`);
  }

  return (
    <>
    <div>Currently logged in as {loggedIn}</div>
    <Card 
      bgcolor='primary'
      header='Deposit'
      text='Please enter in the amount that you would like to deposit for the currently logged in account'
      status={status}
      body={(
        <>
        Deposit amount:
        <br/>
        <input type="number" className="form-control" id="amount" placeholder="Enter deposit amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
        <button type='submit' className='btn btn-light' onClick={handleDeposit}>Deposit</button>
        </>
      )}
    />
    <div>Here is your up-to-date balance: ${getCurrentUserBalance()}</div>
    </>
  )
}


export default Deposit;