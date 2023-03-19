import React from 'react';

const UserContext = React.createContext(null);

function UserProvider({children}) {
    return <UserContext.Provider value={{
        users: [
        {
        name: 'jeremy', 
        email: 'jeremy@example.com',
        password: 'secret',
        balance: 100
        }
    ]
}}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };