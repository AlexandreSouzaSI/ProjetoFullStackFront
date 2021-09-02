import React, { createContext, useState, useCallback } from 'react';

// import { Container } from './styles';

export const UserContext = createContext({})

export const UserProvider = (props) => {
    const [user, setUser] = useState([])


    

    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    )
}