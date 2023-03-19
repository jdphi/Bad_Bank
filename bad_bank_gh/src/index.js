import NavBar from './navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { UserProvider } from './context';

import About from './about';
import AllData from './alldata';
import Balance from './balance';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Home from './home';
import Login from './login';
import Withdraw from './withdraw';

const Routes      = ReactRouterDOM.Routes;
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Spa() {
    return (
      <HashRouter basename="/">
        <div>
            <NavBar/>
            <hr/>
            <UserProvider>
            <Routes>
              <Route path="/about"    element={<About />}    />     
              <Route path="/alldata"  element={<AllData />}  />
              <Route path="/balance"  element={<Balance />}  />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route path="/deposit"  element={<Deposit />}  />
              <Route path="/"  exact element={<Home />}     />
              <Route path="/login"    element={<Login />}    />
              <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
            </UserProvider>
        </div>
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  