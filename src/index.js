import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import AppContext from './contexts/AppContext'
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainApplication(){
    const [isLoggedIn,,setIsLoggedIn]=useState(false);
    const [accountType,setAccountType]=useState("official");//ordinary or official
    const globalData = {isLoggedIn,accountType};

    return (
        <AppContext.Provider value={globalData} >
            <App/>
        </AppContext.Provider>
    )
}

root.render(<MainApplication/>);