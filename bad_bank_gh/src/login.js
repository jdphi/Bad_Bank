import React from 'react';
import Card from './card';
import { UserContext } from './context';

function Login(){
  const ctx = React.useContext(UserContext);  
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    const user = ctx.users.find(u => u.email === email && u.password === password);
    if (user) {
      // Successful login - update status and clear form
      setStatus(`Logged in as ${user.name}`);
      setEmail('');
      setPassword('');
      setShow(false);
      // Store the logged-in user's information in the UserContext
      ctx.setLoggedInUser(user);

    } else {
      // Failed login - update status
      setStatus('Incorrect email or password');
      setEmail('');
      setPassword('');
    }
  }

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('');
  }

  return (
    <>
    <div>Currently logged in as {ctx.loggedInUser.name}</div>
    <Card
      bgcolor='primary'
      header='Login'
      status={status}
      body={show ? (
          <>
          Email address <br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
          <br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
          <br/>
          <button type='submit' className='btn btn-light' onClick={handleLogin}>Log In</button>
          </>
       ):(
        <>
        <h5>Success</h5>
        <p>You successfully logged in!</p>
        <button type='submit' className='btn btn-light' onClick={clearForm}>Log in to another account?</button>
        </>
      )}
    />
    </>
  )  
}

export default Login;