// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const NotificationToastContext = createContext();

export const NotificationToastProvider = ({ children }) => {
    const [notificationToast, setNotificationToast] = useState(false);
    const [notificationToastMessage, setNotificationToastMessage] = useState('');

    const showNotificationToast = () => setNotificationToast(true);
    const hideNotificationToast = () => setNotificationToast(false);
    const setNotificationToastMessageText = (message) => setNotificationToastMessage(message);

    return (
        <NotificationToastContext.Provider value={{ notificationToast, showNotificationToast, hideNotificationToast, notificationToastMessage, setNotificationToastMessageText }}>
            {children}
        </NotificationToastContext.Provider>
    );
};

export const useNotificationToast = () => {
    return useContext(NotificationToastContext);
};
