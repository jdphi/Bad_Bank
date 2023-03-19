import React from 'react';

const UserContext = React.createContext(null);

function UserProvider({children}) {
    const [users, setUsers] = React.useState([]);
    const [loggedInUser, setLoggedInUser] = React.useState({name: '-- you are not logged in yet.'});

    const contextValue = {
        users: users,
        setUsers: setUsers,
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser,
      };
    
      return (
        <UserContext.Provider value={contextValue}>
          {children}
        </UserContext.Provider>
      );
}
export { UserContext, UserProvider };