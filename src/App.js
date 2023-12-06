import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Ping from './Pages/Ping';
import PortCheck from './Pages/PortCheck';
import NavComponent from './Components/NavComponent';
import Home from './Pages/Home';
import NotificationToastComponent from "./Components/NotificationToastComponent";
import {useNotificationToast} from "./contexts/NotificationToastContext";

function App() {
    const {notificationToast, notificationToastMessage} = useNotificationToast();

    return (
        <div className="bg-[#f8fafc] relative">
            {notificationToast && <NotificationToastComponent title='error title' message={notificationToastMessage}/>}
            <NavComponent/>
            <Routes>
                <Route path="/ping" element={<Ping/>}/>
                <Route path="/ping.ge" element={<Home/>}/>
                <Route path="/port-check" element={<PortCheck/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
