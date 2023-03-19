import React from 'react';
import { UserContext } from './context';
import Card from './card';

function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState('');
  const [status, setStatus] = React.useState('');

  function handleWithdraw() {
    // Validate the withdraw amount  
    if (!amount || amount <= 0) {
      setStatus('Invalid withdraw amount');
      setAmount('');
      return;
    }

    // Validate if the user has enough balance
    if (parseFloat(amount) > ctx.loggedInUser.balance) {
      setStatus(`Insufficient funds, you have only $${ctx.loggedInUser.balance}`);
      setAmount('');
      return;
    }

    // Update the user's balance and reset the form
    ctx.loggedInUser.balance -= parseFloat(amount);
    setAmount('');
    setStatus(`Successfully withdrew $${amount}`);
  }

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>
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
    <div>Here is your up-to-date balance: {ctx.loggedInUser.balance}</div>
    </>
  )
}
export default Withdraw;