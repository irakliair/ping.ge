// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const HelmetContext = createContext();

export const HelmetProvider = ({ children }) => {
    const initialData = {
        title: 'Your IP, Ping, Online Ping, Traceroute, Port check, Country by IP',
        description: 'Your IP, Ping, Online Ping, Traceroute, Port check, Country by IP',
        name: '',
        type: 'article'
    };

    const [helmetData, setHelmetData] = useState(initialData);

    const setHelmet = (data) => setHelmetData(data);
    // const setHelmet = (data) => setHelmetData(data);
    const clearHelmet = () => setHelmetData(initialData);

    return (
        <HelmetContext.Provider value={{ helmetData, setHelmet, clearHelmet }}>
            {children}
        </HelmetContext.Provider>
    );
};

export const useHelmet = () => {
    return useContext(HelmetContext);
};
