import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {SpinnerProvider} from "./contexts/SpinnerContext";
import {NotificationToastProvider} from "./contexts/NotificationToastContext";
import {HelmetProvider} from "./contexts/HelmetContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <SpinnerProvider>
            <NotificationToastProvider>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </NotificationToastProvider>
        </SpinnerProvider>
    </Router>
);

reportWebVitals();
