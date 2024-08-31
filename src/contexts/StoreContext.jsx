import React, { createContext, useReducer, useState } from 'react';
import { actions, reducerFunc } from './storeReducer';

export const Context = createContext()


function StoreContext({ children }) {

    const [newState, dispatch] = useReducer(reducerFunc, [])
    
    return (
        <Context.Provider value={{ actions, newState, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export default StoreContext;