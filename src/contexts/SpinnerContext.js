// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
    const [spinner, setSpinner] = useState(false);

    const showSpinner = () => setSpinner(true);
    const hideSpinner = () => setSpinner(false);

    return (
        <SpinnerContext.Provider value={{ spinner, showSpinner, hideSpinner }}>
            {children}
        </SpinnerContext.Provider>
    );
};

export const useSpinner = () => {
    return useContext(SpinnerContext);
};
