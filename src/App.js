import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Ping from './Pages/Ping';
import PortCheck from './Pages/PortCheck';
import NavComponent from './Components/NavComponent';
import Home from './Pages/Home';
import Spinner from "./Components/Spinner";
import {useSpinner} from "./contexts/SpinnerContext"

function App() {

    const {spinner} = useSpinner();

    return (
        <div className="bg-[#f8fafc] relative">
            {/*{spinner && <Spinner/>}*/}
            {/*{!spinner && <>*/}
                <NavComponent/>
                <Routes>
                    <Route path="/ping" element={<Ping/>}/>
                    <Route path="/ping.ge" element={<Home/>}/>
                    <Route path="/port-check" element={<PortCheck/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            {/*</>*/}
            {/*}*/}
        </div>
    );
}

export default App;
