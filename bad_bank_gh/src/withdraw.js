import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Withdraw(){
  const ctx = React.useContext(UserContext);

  const [amount, setAmount] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState('');

  function getCurrentUser() {
    return ctx.users[ctx.users.length - 1];
  }

  function getCurrentUserBalance() {
    const currentUser = getCurrentUser();
    return currentUser.balance;
  }

  React.useEffect(() => {
    const currentUser = getCurrentUser();
    setLoggedIn(currentUser.name);
  }, [ctx.users]);

  function handleWithdraw() {
    // Find the most recently logged-in user
    const currentUser = getCurrentUser()
    // Validate the withdraw amount  
    if (!amount || amount <= 0) {
      setStatus('Invalid withdraw amount');
      setAmount('');
      return;
    }

    // Validate if the user has enough balance
    if (parseFloat(amount) > currentUser.balance) {
      setStatus(`Insufficient funds, you have only $${currentUser.balance}`);
      setAmount('');
      return;
    }

    // Update the user's balance and reset the form
    currentUser.balance -= parseFloat(amount);
    setAmount('');
    setStatus(`Successfully withdrew $${amount}`);
  }

  return (
    <>
    <div>Currently logged in as {loggedIn}</div>
    <Card 
      bgcolor='primary'
      header='Withdraw'
      text='Please enter in the amount that you would like to withdraw for the currently logged in account'
      status={status}
      body={(
        <>
        Withdraw amount:
        <br/>
        <input type="number" className="form-control" id="amount" placeholder="Enter withdraw amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
        <button type='submit' className='btn btn-light' onClick={handleWithdraw}>Withdraw</button>
        </>
      )}
    />
    <div>Here is your up-to-date balance: ${getCurrentUserBalance()}</div>
    </>
  )
}
export default Withdraw;