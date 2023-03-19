import React from 'react';
import { UserContext } from './context';
import Card from './card';

function CreateAccount(){
  const ctx = React.useContext(UserContext);   

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    // console.log(name,email,password);
    if (!validate(name, 'name')) return;
    if (!validate(email,  'email')) return;
    if (!validate(password, 'password')) return;
    const newUser = {name, email, password, balance: 100};

    ctx.setUsers([...ctx.users, newUser]);
    ctx.setLoggedInUser(newUser);
    setShow(false);

  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>    
    <Card
      bgcolor='primary'
      header='Create Account'
      status={status}
      body={show ? (
          <>
          <p>'Welcome! Upon creating an account, your starting balance will be $100.'</p>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/>
          <br/>
          Email address <br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
          <br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
          <br/>
          <button type='submit' className='btn btn-light' onClick={handleCreate}>Create Account</button>
          </>
       ):(
        <>
        <h5>Success</h5>
        <p>Your account has been created.</p>
        <p>You are now logged in as this newly created account.</p>
        <button type='submit' className='btn btn-light' onClick={clearForm}>Create another account</button>
        </>
      )}
    />
    </>
  );
}

export default CreateAccount;